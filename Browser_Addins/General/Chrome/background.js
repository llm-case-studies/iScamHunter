// background.js – Universal Page Capture v0.4.3
// ---------------------------------------------------------------------------
// One‑click capture workflow
//   1. Ask content script for fully rendered HTML + outline (CAPTURE_NOW).
//   2. Save HTML + outline as data‑URLs via chrome.downloads.download.
//   3. Scroll the main window top‑to‑bottom in viewport steps, throttled to
//        MIN_INTERVAL_MS to stay below Chrome quota, capturing each tile.
//      • Optionally save every tile PNG.
//   4. Stitch the tiles in an OffscreenCanvas → full‑page PNG.
//   5. Save stitched PNG.
//
// Fixes in v0.4.3
//   • Removed duplicate helper that caused Unexpected token errors.
//   • OffscreenCanvas requires integer height – use Math.ceil.
//   • Guard for captureVisibleTab returning undefined.
//   • Clean filenames (no double dots).

const MIN_INTERVAL_MS = 350;   // Chrome ~2 captures/sec limit in MV3
const SAVE_TILES       = true; // set false if tiles not needed
const IMAGE_TYPE       = 'png';

chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.id || !tab.url.startsWith('http')) return;

  // 1 ‑‑ Collect HTML + outline
  const res = await chrome.tabs.sendMessage(tab.id, { type: 'CAPTURE_NOW' })
                   .catch(() => null);
  if (!res || !res.html) {
    console.warn('CAPTURE_NOW failed – content script missing?');
    return;
  }

  // Derive filenames
  const ts   = new Date().toISOString().replace(/[:T]/g, '-').slice(0, 16);
  const host = new URL(tab.url).hostname.replace(/[^a-zA-Z0-9.-]/g, '_');
  const base = `Capture_${host}_${ts}`;

  // Helper – encode small strings as data URLs
  const toDataUrl = (str, mime) => 'data:' + mime + ';charset=utf-8,' + encodeURIComponent(str);

  // a) Save HTML & outline
  chrome.downloads.download({ url: toDataUrl(res.html, 'text/html'),                             filename: `${base}.html`  });
  chrome.downloads.download({ url: toDataUrl(JSON.stringify(res.outline, null, 2), 'application/json'), filename: `${base}.json`  });

  // b) Full‑page capture (tiles + stitch)
  await fullPageCapture(tab, base);
});

// ─────────────────────────────────────────────────────────────────────────────
async function fullPageCapture(tab, base) {
  const dims = await chrome.tabs.sendMessage(tab.id, { type: 'GET_DIMENSIONS' });
  const tiles = [];
  let y = 0, index = 0;

  while (y < dims.totalHeight) {
    await chrome.tabs.sendMessage(tab.id, { type: 'SCROLL_TO', y });
    await delay(MIN_INTERVAL_MS);

    const dataUrl = await new Promise(res =>
      chrome.tabs.captureVisibleTab(tab.windowId, { format: IMAGE_TYPE }, res));
    if (!dataUrl) {
      console.warn('captureVisibleTab returned undefined – quota hit?');
      break;
    }

    tiles.push({ dataUrl, y });
    if (SAVE_TILES) {
      chrome.downloads.download({ url: dataUrl, filename: `${base}_tile_${String(index).padStart(3,'0')}.${IMAGE_TYPE}` });
    }
    y += dims.viewportHeight;
    index++;
  }

  // Stitch tiles
  const bitmaps = await Promise.all(tiles.map(t => dataUrlToBitmap(t.dataUrl)));
  const canvas = new OffscreenCanvas(bitmaps[0].width, Math.ceil(dims.totalHeight * dims.devicePixelRatio));
  const ctx = canvas.getContext('2d');
  bitmaps.forEach((bmp, i) => ctx.drawImage(bmp, 0, tiles[i].y * dims.devicePixelRatio));

  const blob = await canvas.convertToBlob({ type: `image/${IMAGE_TYPE}` });
  const stitchedUrl = await blobToDataUrl(blob);
  chrome.downloads.download({ url: stitchedUrl, filename: `${base}_full.${IMAGE_TYPE}` });
}

function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

async function dataUrlToBitmap(dataUrl) {
  const blob = await (await fetch(dataUrl)).blob();
  return createImageBitmap(blob);
}

function blobToDataUrl(blob) {
  return new Promise(res => {
    const fr = new FileReader();
    fr.onload = () => res(fr.result);
    fr.readAsDataURL(blob);
  });
}
