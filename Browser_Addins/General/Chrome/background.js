// Browser_Addins/General/Chrome/background.js
import './logger.js';   // ← ensures `self.logger` is defined

self.logger.info('Service worker starting…');

const MIN_INTERVAL_MS = 350;  // throttle between screenshots
let lastCapture = 0;

// If the user clicks the toolbar icon directly (fallback):
chrome.action.onClicked.addListener((tab) => {
  chrome.runtime.sendMessage({
    type: 'CAPTURE_WITH_OPTIONS',
    options: { main: ['screenshot', 'outline', 'html'] }
  });
});

// Listen for messages from popup.js
chrome.runtime.onMessage.addListener((msg, _sender) => {
  if (msg.type !== 'CAPTURE_WITH_OPTIONS') return;
  const opts = msg.options || {};
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    runCaptureWithOptions(tab, opts);
  });
  return true;  // keep channel open for potential async replies
});

async function runCaptureWithOptions(tab, opts) {
  self.logger.info('▶ Capture started for', tab.url, opts);

  // 1) Ask the content script for HTML / outline / text
  let resp;
  try {
    resp = await chrome.tabs.sendMessage(tab.id, { type: 'CAPTURE_NOW' });
  } catch (err) {
    // Likely no capture.js listener injected
    self.logger.error('Error sending CAPTURE_NOW—no capture.js listener?', err);
    return;
  }
  if (!resp) {
    self.logger.warn('No response from capture.js (resp was undefined). Did you refresh the tab?');
    return;
  }
  self.logger.debug('→ Received CAPTURE_NOW response', resp);

  const base = toFilename(tab.url);
  const mainOpts = opts.main || [];

  // 2a) Save HTML
  if (mainOpts.includes('html')) {
    self.logger.debug('Saving HTML:', `${base}.html`);
    chrome.downloads.download({
      url: dataUrl(resp.html, 'text/html'),
      filename: `${base}.html`
    });
  }

  // 2b) Save OUTLINE (JSON)
  if (mainOpts.includes('outline')) {
    self.logger.debug('Saving Outline:', `${base}.json`);
    chrome.downloads.download({
      url: dataUrl(JSON.stringify(resp.outline, null, 2), 'application/json'),
      filename: `${base}.json`
    });
  }

  // 2c) Save TEXT
  if (mainOpts.includes('text')) {
    self.logger.debug('Saving Text:', `${base}.txt`);
    chrome.downloads.download({
      url: dataUrl(resp.text, 'text/plain'),
      filename: `${base}.txt`
    });
  }

  // 2d) Full-page screenshot
  if (mainOpts.includes('screenshot')) {
    await fullPageCapture(tab, base, { saveTiles: false, imgType: 'png' });
  }

  // 3) Placeholder for pane‐specific captures
  Object.entries(opts)
    .filter(([k]) => k !== 'main')
    .forEach(([paneId, actions]) => {
      self.logger.warn('Pane capture not yet implemented for pane:', paneId, actions);
    });
}

// ─── Full-page capture (tiles + stitch) ─────────────────────────────────────────
async function fullPageCapture(tab, base, { saveTiles, imgType }) {
  // Throttle to avoid overwhelming the tab
  const now = Date.now();
  if (now - lastCapture < MIN_INTERVAL_MS) {
    await new Promise((resolve) => setTimeout(resolve, MIN_INTERVAL_MS - (now - lastCapture)));
  }
  lastCapture = Date.now();

  // 1) Ask for total/document dimensions
  const dims = await chrome.tabs.sendMessage(tab.id, { type: 'GET_DIMENSIONS' });
  let scrollY = 0;
  const shots = [];

  // 2) Scroll + capture tiles
  while (scrollY < dims.totalHeight) {
    await chrome.tabs.sendMessage(tab.id, { type: 'SCROLL_TO', y: scrollY });
    await delay(150);
    const dataUrl_ = await new Promise((resolve) =>
      chrome.tabs.captureVisibleTab(tab.windowId, { format: imgType }, resolve)
    );
    shots.push({ dataUrl: dataUrl_, y: scrollY });
    scrollY += dims.viewportHeight;
  }

  // 3) (Optional) Save individual tile images
  if (saveTiles) {
    shots.forEach((s, index) => {
      const tileName = `${base}_tile_${String(index).padStart(3, '0')}.${imgType}`;
      self.logger.debug('Saving tile image:', tileName);
      chrome.downloads.download({
        url: s.dataUrl,
        filename: tileName
      });
    });
  }

  // 4) Stitch tiles into one tall image
  const bitmaps = await Promise.all(shots.map((s) => dataUrlToBitmap(s.dataUrl)));
  const stitchedHeight = Math.ceil(dims.totalHeight * (dims.devicePixelRatio || 1));
  const canvas = new OffscreenCanvas(bitmaps[0].width, stitchedHeight);
  const ctx = canvas.getContext('2d');
  bitmaps.forEach((bmp, idx) => {
    ctx.drawImage(bmp, 0, shots[idx].y * dims.devicePixelRatio);
  });
  const blob = await canvas.convertToBlob({ type: `image/${imgType}` });
  const fullName = `${base}_full.${imgType}`;
  self.logger.debug('Saving stitched image:', fullName);
  chrome.downloads.download({
    url: URL.createObjectURL(blob),
    filename: fullName
  });
}

// ─── Helpers ───────────────────────────────────────────────────────────────────
function toFilename(u) {
  const hostname = new URL(u).hostname.replace(/[^a-z0-9.-]/gi, '_');
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  return `Capture_${hostname}_${timestamp}`;
}

function dataUrl(str, mime) {
  return `data:${mime};charset=utf-8,` + encodeURIComponent(str);
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function dataUrlToBitmap(url) {
  const blob = await (await fetch(url)).blob();
  return createImageBitmap(blob);
}

self.logger.info('Service worker initialized');
