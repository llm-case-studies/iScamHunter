# Campaign‑Capture Extension: Three‑Phase Roadmap & Current Status

📖 **Overview & High‑Level Goals**

We are building a Chrome extension that enables an entire team to document, archive, and migrate campaign assets—including websites (store, funnel), social profiles (Facebook, Instagram, Telegram, YouTube), and user workflows—into a single, unified representation. The final deliverable is:

* Offline archives of every page’s HTML (with images inlined), outline (DOM summary), text, and stitched screenshots.
* User‑driven “demo paths” logged as click‑streams, merged with a crawler‑generated site map, producing a comprehensive link graph.
* Visual flowcharts (Mermaid‑formatted) depicting each campaign asset’s structure and how users navigate between them.

To achieve this, we’ll work in three successive phases. Each phase has clear stepping stones (not just milestones) and builds directly on the previous phase. At the end of Phase 1 (this chat), the MVP—HTML/JSON/Text dumps + full‑page stitched screenshot + basic popup UI—has been implemented. Phases 2 and 3 remain.

✅ **Phase 1 (Completed in Chat #1)**

Objective: Deliver an MVP that can capture any single page (on any domain) and save all of:

* HTML dump (raw outerHTML, with external assets still referenced)
* Outline JSON (a simple DOM‑outline array)
* Text dump (document.body.innerText)
* Full‑page stitched PNG screenshot

**Deliverables:**

* **capture.js (content script)**

  * Listens for `CAPTURE_NOW`, `GET_DIMENSIONS`, `SCROLL_TO`, `DETECT_PANES`.
  * Returns `{ html, outline, text }` on `CAPTURE_NOW`.
  * Reports page dimensions and scrolls upon request.
  * Detects all scrollable elements (`el.scrollHeight - el.clientHeight > 20`).

* **screenshot.js (helper module)**

  * Implements `fullPageCapture(tab, baseName, { saveTiles, imgType })`.
  * Throttles `captureVisibleTab()` calls to respect Chrome’s quota.
  * Uses `createImageBitmap()` and an `OffscreenCanvas` to stitch multiple viewport captures into one tall PNG.
  * Converts the final Blob into a data‑URL for `chrome.downloads.download`.

* **background.js (service worker)**

  * Imports `screenshot.js` and `logger.js`.
  * Listens for the popup’s `CAPTURE_WITH_OPTIONS` message.
  * Sends `CAPTURE_NOW` to the active tab, then saves whichever of `[html, outline, text]` the user requested.
  * If “screenshot” is requested, calls `fullPageCapture(...)` with `saveTiles: false`.
  * Logs warnings for pane‑capture requests (not yet implemented).

* **popup.html & popup.js**

  * Renders checkboxes for Main window: Screenshot / Outline / HTML / Text.
  * “All” and “None” buttons toggle all checkboxes.
  * On “Start Capture,” collects `options.main = [ ... ]` and sends to background.
  * Dynamically requests `DETECT_PANES` to list scrollable panes, rendering four checkboxes per pane (Screenshot / Outline / HTML / Text).
  * On “Start Capture,” also packages each pane’s selected actions into `options['paneId'] = [ ... ]`.

* **logger.js**

  * Provides `logger.info()`, `logger.debug()`, `logger.warn()`, `logger.error()`, prefixed with `[I]/[D]/[W]/[E]` aide:.
  * Allows centralized log‑level control if needed in future.

* **manifest.json**

  ```json
  {
    "content_scripts": [
      { "matches": ["<all_urls>"], "js": ["logger.js","capture-utils.js","screenshot.js","capture.js"], "run_at": "document_end" }
    ],
    "background": { "service_worker": "background.js", "type": "module" },
    "action": { "default_popup": "popup.html" },
    "permissions": ["downloads","activeTab","tabs","scripting"]
  }
  ```

**Verified Behavior:**

* Browsing to any page, clicking the extension icon or using the popup → downloads four files (if all checkboxes checked):

  * `Capture_<hostname>_<timestamp>.html`
  * `Capture_<hostname>_<timestamp>.json` (outline)
  * `Capture_<hostname>_<timestamp>.txt` (text)
  * `Capture_<hostname>_<timestamp>_full.png` (stitched screenshot)
* No runtime errors (Chrome quotas respected; no "Image is not defined"; no `URL.createObjectURL` failures).
* Pane detection is functional, but per‑pane capture was stubbed (logs a warning).

🎯 **Phase 2: “Page‑Level Polish & Pane Refinement”**

**Goal:** Elevate the MVP into a robust page‑archival tool by adding:

* **Accurate Pane Filtering** so that the popup only lists truly meaningful, top‑level scrollable regions (no “image wrappers” or nested `<div>` ghosts).
* **Image Inlining in Saved HTML** so that every `<img>` is embedded as a data‑URI, producing a fully self‑contained HTML snapshot (no external image URLs).
* **“Save Tiles” Toggle** in the popup that, when checked, instructs the screenshot routine to download every intermediate tile (e.g. `…_tile_000.png`, `…_tile_001.png`) rather than just the final `_full.png`.
* **Optional:** Pane‑Level Captures (HTML/Text/Screenshot) for each scrollable region, if time permits.

🔍 **Phase 2.1: Pane Filtering**

**Current Logic (Phase 1):**

```js
const panes = [...document.querySelectorAll('*')]
  .filter(el => el.scrollHeight - el.clientHeight > 20)
  .map(...);
```

This finds every element whose content overflows by > 20px—including deeply nested `.image-wrapper` or hidden containers.

**Desired Logic:**

* Only top‑level scrollable containers: Exclude any element that has a scrollable ancestor already in the list.
* Skip `<html>`/`<body>` if they’re treated separately as the “Main Window.”
* Optionally enforce a minimum absolute height (e.g. `scrollHeight > 800px`) to capture only large regions.
* Skip nodes with `overflow: hidden` or `visibility: hidden` (CSS‑computed style check).

**Implementation Steps:**

* Modify `capture.js`’s `DETECT_PANES` handler:

  ```js
  if (msg.type === 'DETECT_PANES') {
    const allOverflow = [...document.querySelectorAll('*')]
      .filter(el =>
        el.scrollHeight - el.clientHeight > 20 &&
        el !== document.documentElement &&
        el !== document.body &&
        window.getComputedStyle(el).overflowY !== 'hidden' &&
        el.scrollHeight > 300 // example threshold
      );
    // Remove nested children if parent is already in allOverflow
    const topLevel = allOverflow.filter((el) =>
      !allOverflow.some((parent) => parent !== el && parent.contains(el))
    );
    const panes = topLevel.map((el, i) => ({
      id: `pane_${i}`,
      label: el.id || el.className.split(' ')[0] || el.tagName.toLowerCase(),
      height: el.scrollHeight
    }));
    sendRes(panes);
    return true;
  }
  ```

* Test on pages with multiple nested scrollable `<div>`s (e.g. Facebook feed) to confirm only one or two entries appear.

* Update `popup.js` to render only these filtered panes under “Scrollable Panes.”

🔍 **Phase 2.2: Image Inlining**

**Objective:** Before returning `outerHTML` on `CAPTURE_NOW`, replace every `<img src="…">` with a `data:image/...;base64,…` URL so that the saved HTML is fully self‑contained.

**Implementation Steps:**

* In `capture.js`, add a helper function:

  ```js
  async function inlineAllImages() {
    // Collect all <img> tags
    const imgs = Array.from(document.querySelectorAll('img[src]'));
    // For each <img>, fetch its blob, convert to Data URL, then replace src
    await Promise.all(imgs.map(async (img) => {
      try {
        // Use fetch with credentials to handle cookies if cross‑origin
        const resp = await fetch(img.src, { credentials: 'include' });
        if (!resp.ok) return;
        const blob = await resp.blob();
        const dataUrl = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        });
        img.src = dataUrl;
      } catch (e) {
        console.warn('inlineAllImages: failed to inline', img.src, e);
      }
    }));
  }
  ```

* Modify the `CAPTURE_NOW` handler:

  ```js
  if (msg.type === 'CAPTURE_NOW') {
    // 1) Inline images if HTML is requested
    if (msg.options?.main?.includes('html')) {
      await inlineAllImages();
    }
    // 2) Capture HTML, Outline, Text as before
    const html = document.documentElement.outerHTML;
    const outline = buildOutline(document.body);
    const text = document.body.innerText || '';
    sendRes({ html, outline, text });
    return true;
  }
  ```

* Update `background.js` to send options along with `CAPTURE_NOW`:

  ```js
  // Instead of chrome.tabs.sendMessage(tab.id, { type: 'CAPTURE_NOW' });
  const resp = await chrome.tabs.sendMessage(tab.id, {
    type: 'CAPTURE_NOW',
    options: opts  // so capture.js knows whether to inline images
  });
  ```

* Verify by capturing a page with many `<img>` tags (e.g. an Instagram post) and open `Capture_<host>.html` offline—images must appear embedded.

🔍 **Phase 2.3: “Save Tiles” UI & Logic**

**Objective:** Let users choose whether to download each tiled viewport image in addition to (or instead of) a single stitched full‑page PNG.

**Popup UI Changes (`popup.html` / `popup.js`):**

* Under “Main window” checkboxes, add:

  ```html
  <input type="checkbox" id="main-tiles" data-id="tiles" />
  <label for="main-tiles">Save tiles</label>
  ```

* In `popup.js`, when gathering options:

  ```js
  const mainModes = [...document.querySelectorAll('#main-section input[type=checkbox]:checked')]
    .map(el => el.dataset.id)
    .filter(id => id !== 'tiles');  // “tiles” isn’t a mode but a flag
  options.main = mainModes;  
  options.saveTiles = document.querySelector('#main-tiles').checked;
  // Send saveTiles in the CAPTURE_WITH_OPTIONS message.
  ```

**Background Logic (`background.js`):**

* In `runCaptureWithOptions(tab, opts)`, change:

  ```js
  // if mainOpts includes 'screenshot'
  if (mainOpts.includes('screenshot')) {
    const saveTiles = !!opts.saveTiles;
    await fullPageCapture(tab, base, { saveTiles, imgType: 'png' });
  }
  ```

* Confirm that if `saveTiles === true`, each tile is downloaded as `…_tile_000.png`, etc. When `saveTiles === false`, only `…_full.png` is emitted.

**Testing:**

* Capture a tall page (e.g. `/store`) with “Screenshot” checked but “Save tiles” unchecked—verify only a single `_full.png` appears.
* Capture again with “Save tiles” checked—verify multiple `_tile_000.png`, `_tile_001.png`, … plus optionally `_full.png` (or, if you choose, skip `_full.png` and keep only tiles).
* Fix any filename‑collision issues (e.g. tile and full‑page naming).

🔍 **Phase 2.4: (Optional Stretch) Per‑Pane HTML/Text/Screenshot**

If time permits, implement actual pane‑capture instead of logging a warning. For each detected pane (from `DETECT_PANES`), allow the user to request:

* HTML dump of that pane only (by scoping `document.querySelector(paneSelector).outerHTML`).
* Text dump of that pane only (paneElement.innerText).
* Screenshot of that pane only (scroll that pane to top, use `captureVisibleTab` with cropping/clipping to the pane’s bounding box, or clone the pane into a temporary full‑viewport container and capture).

Because pane logic can become complex, you may decide to defer it to Phase 3. In Phase 2, it’s acceptable to keep “per‑pane = unimplemented (warning).”

**Commit & Document Phase 2**

At completion, write a brief “Phase 2 Handoff” note (e.g. `docs/phase2-handoff.md`) listing:

* Files changed (`capture.js`, `popup.html`, `popup.js`, `background.js`, etc.).
* What was accomplished (pane filtering, image inlining, save‑tiles toggle).
* What remains (per‑pane capture, demo path).

🔹 **Phase 3: “Demo Paths, Multi‑Domain Crawl & Mermaid Flowcharts”**

**Goal:** Combine human‑driven demo sessions with an automated crawler that spans the store/funnel site and all social media assets, then visualize the full campaign as a Mermaid flowchart.

📌 **Key Capabilities to Add**

* **Demo‑Path Logging**

  * Record the exact sequence of URLs a team member visits (“Home → Sales → Checkout → FB Page → IG Profile → …”).
  * Store this ordered list in memory (e.g. `demoPath = []`) within `interaction-logger.js`.
  * Provide a `GET_DEMO_PATH` message to retrieve that list when the user requests it.

* **Phase B Crawl Seeded by Demo Path**

  * Take the `demoPath` array of URLs and use it as the seed queue for a hidden‑tab crawl (Phase B).
  * For every URL in `demoPath`, open a hidden tab:

    1. Wait for `document.readyState === 'complete'`.
    2. Programmatically scroll to the bottom (to load infinite content).
    3. Extract all same‑campaign‑domain `<a href>` links (Facebook, Instagram, Telegram, YouTube, your store).
    4. Enqueue newly discovered links if they match any of your whitelisted campaign domains.
    5. Continue until the queue is exhausted or a page/iteration limit is reached.

* **Phase A (Optional) Fast Fetch Crawl**

  * (If desired) Run a parallel, pure‑fetch + `DOMParser` crawl on each demo URL to quickly harvest all server‑rendered `<a>` links.
  * Merge with Phase B results to catch both static and dynamic links.

* **Edge & Node Extraction**

  * **Demo edges:** for every consecutive pair in `demoPath`:

    ```js
    demoEdges = demoPath.slice(0,-1).map((u,i) => [u, demoPath[i+1]]);
    ```
  * **Auto‑discovered edges:** for each crawled page `u`, for each extracted same‑host link `v`, record `[u, v]`.
  * Merge edges (remove duplicates) to form a final edge list.

* **Mermaid‑Formatted Flowchart Generation**

  1. Assign each unique URL a short ID (`N1, N2, N3…`).
  2. Build node declarations (e.g. `N1["Home"]`, using pathname or `document.title` as a label).
  3. Build arrow declarations for every edge (`N1 --> N2`).
  4. Optionally group nodes into subgraphs (e.g. “subgraph Facebook { F1\[FB‑Page] … }”).
  5. Output the entire text block:

  ```mermaid
  flowchart LR
    N1["Home"] --> N2["Sales"]
    N2 --> N3["Checkout"]
    N3 --> F1["FB‑Page"]
    F1 --> I1["IG Profile"]
    I1 -->[] N2  <!-- IG links back to /sales -->
    …
  ```

  5. Provide a “Download Flowchart” button in the popup that saves this `.mmd` file.

* **Multi‑Domain Whitelisting**

  ```js
  const CAMPAIGN_DOMAINS = [
    "iscamhunter.com", "www.iscamhunter.com",
    "facebook.com",     "www.facebook.com",
    "instagram.com",    "www.instagram.com",
    "t.me",             "telegram.me",
    "youtube.com",      "www.youtube.com"
  ];
  ```

  * During link extraction (both in page and in hidden tabs), only enqueue hrefs whose `new URL(href).hostname` is in that list.

* **UI in Popup**
  Add:

  ```html
  <button id="start-demo-btn">Start Demo</button>
  <button id="clear-demo-btn">Clear Demo</button>
  <button id="build-flow-btn">Build Campaign Flowchart</button>
  ```

  `popup.js`:

  ```js
  document.getElementById('start-demo-btn').addEventListener('click', () => {
    chrome.tabs.sendMessage(activeTabId, { type: 'CLEAR_DEMO_PATH' });
    appendLog('Demo path reset. Start navigating now.');
  });

  document.getElementById('clear-demo-btn').addEventListener('click', () => {
    chrome.tabs.sendMessage(activeTabId, { type: 'CLEAR_DEMO_PATH' });
    appendLog('Demo path cleared.');
  });

  document.getElementById('build-flow-btn').addEventListener('click', () => {
    // 1) Retrieve demoPath
    chrome.tabs.sendMessage(activeTabId, { type: 'GET_DEMO_PATH' }, (demoPath) => {
      // 2) Kick off combined crawl
      chrome.runtime.sendMessage(
        { type: 'START_COMBINED_CRAWL_WITH_DEMO', demoPath },
        (resp) => {
          if (resp.success) {
            // 3) Download .mmd
            const filename = `CampaignFlow_${new Date().toISOString().replace(/[:.]/g, '-')}.mmd`;
            chrome.downloads.download({
              url: 'data:text/plain;charset=utf-8,' + encodeURIComponent(resp.mermaid),
              filename
            });
            appendLog(`Flowchart downloaded as ${filename}`);
          } else {
            appendLog(`Error building flowchart: ${resp.error}`);
          }
        }
      );
    });
  });
  ```

  `background.js`: Add listener for `START_COMBINED_CRAWL_WITH_DEMO`, run the two‑phase crawl + edge extraction + `buildMermaid`, then return `{ success: true, mermaid: … }`.

**Testing & Validation**

* **Demo Recording:**

  1. Click “Start Demo.”
  2. Navigate the entire funnel: Home → Mat Page → Checkout → Order Confirmation → FB Page → IG Profile → YouTube Channel.
  3. Ensure that each URL change is appended to `demoPath`.
  4. Click “Build Campaign Flowchart.”

* **Hidden‑Tab Crawl:**

  * Confirm that background spawns hidden tabs for every URL in the `demoPath`.
  * Each hidden tab scrolls and extracts all allowed‑host `<a>` links (including subsequent posts or related pages on social platforms).
  * Each hidden tab closes after finishing.

* **Edge Merging:**

  * Verify that `demoEdges` (the human’s consecutive clicks) appear as solid arrows.
  * Verify that `autoEdges` (any other links found on each page) appear as dashed arrows or a separate style if you choose.
  * The final Mermaid file should reflect both.

* **Mermaid Output:**

  * Paste the downloaded `.mmd` into mermaid.live or any Mermaid‑enabled Markdown viewer.
  * Confirm readability: nodes labeled by path or page title, distinct subgraphs per domain if you implemented them.
  * Optionally test grouping:

    ```mermaid
    flowchart LR
      subgraph Store
        N1["Home"] --> N2["Products"]
        N2 --> N3["Checkout"]
      end
      subgraph Facebook
        N4["FB Page"] --> N5["FB Post #1"]
        N5 --> N1
      end
    ```

* **Edge Cases:**

  * If a hidden tab fails to load, log a warning and continue.
  * If `demoPath` is empty, prompt the user to “click Start Demo” and navigate first.
  * If no crawl results beyond the demo path, still produce a valid flowchart containing just the demo edges.

**Commit & Document Phase 3**

Create `docs/phase3-handoff.md` summarizing:

* All files and methods added (`interaction-logger.js` updates, `crawler-content.js`, `background.js` changes, `popup.html/js` updates).
* How to run the new buttons.
* What the final deliverables look like.

🌱 **Summary of Completed Work in This Chat (Phase 1)**

Implemented MVP extension capable of:

* Capturing raw HTML, outline JSON, and plain text for any single page.
* Generating and downloading a full‑page stitched PNG without errors.
* Providing a popup UI with “Main Window” checkboxes and a list of detected panes (though pane‑capture remains a stub).
* Splitting code into modules (`capture.js`, `screenshot.js`, `background.js`, `popup.html/js`, `logger.js`, `capture-utils.js`).
* Logging via a centralized logger helper.
* Committing the full codebase to a GitHub repository, tagged as “Phase 1 complete.”

🚩 **Next Steps: Handover to Chat #2**

When you start Chat #2, please supply:

* **“Phase 1 Handoff” summary** (the bullet list above) so Chat #2 knows exactly what has been built.
* **All relevant files under** `Browser_Addins/General/Chrome` (e.g. `background.js`, `capture.js`, `screenshot.js`, `popup.html`, `popup.js`, `logger.js`, `capture-utils.js`, `manifest.json`, `icons`). You can either upload the folder or copy‑paste individual files.

With that in place, Chat #2 will have full context to implement Phase 2 stepping stones (pane filtering, image inlining, save‑tiles toggle).

---

*End of Mission Statement & Roadmap*

* Phase 1 is done.
* Phase 2 assignments and milestones outlined above.
* Phase 3 assignments and milestones outlined above.
