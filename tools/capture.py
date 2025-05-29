import asyncio
import json
from pathlib import Path
from urllib.parse import urlparse
from typing import List, Tuple

from bs4 import BeautifulSoup  # pip install beautifulsoup4
from playwright.async_api import async_playwright, TimeoutError  # pip install playwright

"""tools/capture.py — Snapshot utility for Scam Hunters funnel
================================================================
This script crawls a list of public (or preview) URLs and stores three
artifacts per page under the *snapshot/* folder:

• **PNG**  – full‑page screenshot              → snapshot/screens/<slug>.png
• **HTML** – raw markup as delivered          → snapshot/html/<slug>.html
• **JSON** – lightweight block/text outline   → snapshot/blocks/<slug>.json

The URL list lives in *docs/urls.txt* — one URL per line.  Anything that
appears after a “#” on that line is treated as a *comment / slug label*
and ignored when navigating.  The remainder becomes the canonical URL.

Running:
    python3 tools/capture.py

Requirements (one‑time):
    pip install playwright beautifulsoup4
    playwright install chromium

If Cloudflare (or ClickFunnels preview) blocks the headless browser you
can paste session cookies below.  See the README section in the
Campaign Blueprint for exact steps.
"""

# ---------------------------------------------------------------------------
# ⬇️  Configuration / Paths
# ---------------------------------------------------------------------------
ROOT = Path(__file__).resolve().parent.parent
URLS_FILE = ROOT / "docs" / "urls.txt"
SNAPSHOT_DIR = ROOT / "snapshot"
SCREENS_DIR = SNAPSHOT_DIR / "screens"
HTML_DIR = SNAPSHOT_DIR / "html"
BLOCKS_DIR = SNAPSHOT_DIR / "blocks"

# Optional: add Cloudflare / preview cookies here to bypass bot checks.
# Example:
COOKIES: List[dict] = [{
    "name": "cf_clearance",           # whatever the cookie’s Name column shows
    "value": "B52o4_Axd67Dx3gel4IO8PN4A9t0MwzA2ocmjm615o8-1748455373-1.2.1.1-ajJg1dsKVE7viWcNVmTOUxtWjbx2IUFJ04YPpU48CosRO.G87wYrJQEEQ_caSN0YSMx0wO63DSWvEzvTedtIQGhh9g8jJhH_nxOL5wkqnn54K7JW9OlsGapz4l1ItkaajchuHr0QFkgILGzs.etVtv2nSpo.HxZojR14pBidNprPlLSEpkd4jxE0umVyp38v0HHFEMZ6Fir_7tVx3._MVy88TAia5986pBGQh23eJclblgM2ykZLOaBY8UNmHVkX0R0p2nDDe.3bOyDWU3mPxmFd1ifF180XNHMP4IZAKzdROn7dhc790ft98qMOlx5xGpTRrZFtnctapMs8vC5ogIOkzAF6MHo7enIcdQtukE4F4yrFpSLNHZRU3JutT_C2",
    "domain": ".iscamhunter.com",     # note the leading dot
    "path": "/",
    "httpOnly": True,
    "secure": True,
    "sameSite": "Lax"
}]
COOKIES: List[dict] = []  # leave empty for normal public pages

# Ensure output directories exist so we never fail on missing folders
for _dir in (SCREENS_DIR, HTML_DIR, BLOCKS_DIR):
    _dir.mkdir(parents=True, exist_ok=True)


# ---------------------------------------------------------------------------
# ⬇️  Helper functions
# ---------------------------------------------------------------------------

def derive_slug(url: str) -> str:
    """Generate a filesystem‑friendly slug from the URL path."""
    parsed = urlparse(url)
    # Fallback for root path – use "home" to avoid empty filenames
    path = parsed.path.strip("/") or "home"
    return path.replace("/", "_")


async def capture_one(page_url: str, slug: str, browser) -> None:
    """Navigate to *page_url* in Playwright and write PNG / HTML / JSON files."""
    page = await browser.new_page()

    try:
        # Wait until the network is idle (no more than 30 s) for a stable capture
        await page.goto(page_url, wait_until="networkidle", timeout=30_000)

        # ---------- Screenshot ----------
        await page.screenshot(path=SCREENS_DIR / f"{slug}.png", full_page=True)

        # ---------- Raw HTML ----------
        html: str = await page.content()
        (HTML_DIR / f"{slug}.html").write_text(html, encoding="utf‑8")

        # ---------- Block outline ----------
        soup = BeautifulSoup(html, "html.parser")
        blocks = []
        for elem in soup.find_all(["section", "div", "main", "header", "footer"]):
            text = elem.get_text(" ", strip=True)
            if not text:
                continue  # skip empty containers
            blocks.append({
                "tag": elem.name,
                "id": elem.get("id"),
                "class": elem.get("class"),
                "text": text[:120]  # preview the first ~120 chars for quick diffing
            })
        (BLOCKS_DIR / f"{slug}.json").write_text(
            json.dumps(blocks, indent=2, ensure_ascii=False))

        print(f"✔ {page_url}  → {slug}")

    # ---------------- Error handling ----------------
    except TimeoutError:
        print(f"✖ Timeout loading {page_url}")
    except Exception as exc:
        print(f"✖ Failed {page_url}\n  {exc}")
    finally:
        await page.close()


# ---------------------------------------------------------------------------
# ⬇️  Main async workflow
# ---------------------------------------------------------------------------

async def build_target_list() -> List[Tuple[str, str]]:
    """Parse docs/urls.txt → [(url, slug), …] ignoring blanks & comments."""
    targets: List[Tuple[str, str]] = []
    for raw in URLS_FILE.read_text().splitlines():
        raw = raw.strip()
        if not raw or raw.startswith("#"):
            continue  # skip blank lines & full‑line comments

        # Split into URL and optional comment after '#'
        if "#" in raw:
            url_part, comment = raw.split("#", 1)
            url = url_part.strip()
            slug = comment.strip() or derive_slug(url)
        else:
            url = raw
            slug = derive_slug(url)

        targets.append((url, slug))
    return targets


async def main() -> None:
    targets = await build_target_list()

    async with async_playwright() as pw:
        browser = await pw.chromium.launch()

        # If we provided cookies, preload them in a fresh context
        if COOKIES:
            context = await browser.new_context()
            await context.add_cookies(COOKIES)
            # Use this context for every capture to retain the session
            capture_browser = context
        else:
            capture_browser = browser

        # Kick off all captures concurrently → faster overall run
        await asyncio.gather(*(capture_one(u, s, capture_browser) for u, s in targets))

        if COOKIES:
            await capture_browser.close()  # close context if we created one
        await browser.close()


# ---------------------------------------------------------------------------
# ⬇️  Entry point guard
# ---------------------------------------------------------------------------

if __name__ == "__main__":
    # Run the async main inside the event loop
    asyncio.run(main())
