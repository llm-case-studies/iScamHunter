import './logger.js';   // ← ensures `self.logger` is defined

self.logger.info('Service worker starting…');

// Browser_Addins/General/Chrome/background.js
const MIN_INTERVAL_MS = 350;  // throttle
let lastCapture = 0;

chrome.action.onClicked.addListener((tab) => {
  // still supports the old direct click if needed
  chrome.runtime.sendMessage({ type: 'CAPTURE_WITH_OPTIONS', options: { main: ['screenshot', 'outline', 'html'] } });
});

// New: listen for the popup’s command
chrome.runtime.onMessage.addListener((msg, _sender) => {
  if (msg.type !== 'CAPTURE_WITH_OPTIONS') return;

  const opts = msg.options || {};
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    const tab = tabs[0];
    runCaptureWithOptions(tab, opts);
  });
  return true;
});

async function runCaptureWithOptions(tab, opts) {

  //console.log('▶▶ runCaptureWithOptions received:', opts);

  // 1) Always get the core data in one call

  logger.info('▶ Capture started for', tab.url, opts);
  //const resp = await chrome.tabs.sendMessage(tab.id, { type: 'CAPTURE_NOW' });
  let resp;
  try {
    resp = await chrome.tabs.sendMessage(tab.id, { type: 'CAPTURE_NOW' });
  } catch (err) {
    // No listener (i.e., capture.js not injected)
    logger.error('Error sending CAPTURE_NOW—no capture.js listener?', err);
    return;
  }
  if (!resp) {
    // capture.js didn’t call sendRes(...) or returned nothing
    logger.warn(`No response from capture.js (resp was undefined). Is capture.js injected?`);
    return;
  }
  logger.debug('→ Received CAPTURE_NOW response', resp);

  const base = toFilename(tab.url);

  // 2) Main window
  const mainOpts = opts.main || [];
  if (mainOpts.includes('html')) {
    logger.debug('Saving HTML:', `${base}.html`);
    chrome.downloads.download({ url: dataUrl(resp.html, 'text/html'), filename: `${base}.html` });
  }
  if (mainOpts.includes('outline')) {
    chrome.downloads.download({ 
      url: dataUrl(JSON.stringify(resp.outline, null, 2), 'application/json'), filename: `${base}.json`, 
      filename: `${base}.json`
    });

  }
  if (mainOpts.includes('text')) {
    chrome.downloads.download({ url: dataUrl(resp.text, 'text/plain'), filename: `${base}.txt` });
  }
  if (mainOpts.includes('screenshot')) {
    await fullPageCapture(tab, base, { saveTiles: false, imgType: 'png' });
  }

  // 3) Panes (future – leaving placeholders)
  Object.entries(opts)
    .filter(([k]) => k !== 'main')
    .forEach(async ([paneId, actions]) => {
      // TODO: locate pane by ID, scroll it, then repeat html/Text/Screenshot on that element
      console.warn('Pane capture not yet implemented for pane:', paneId, actions);
    });
}

// ─── full-page capture as before ──────────────────────────────────
async function fullPageCapture(tab, base, { saveTiles, imgType }) {
  const now = Date.now();
  if (now - lastCapture < MIN_INTERVAL_MS) {
    await new Promise(r => setTimeout(r, MIN_INTERVAL_MS - (now - lastCapture)));
  }
  lastCapture = Date.now();

  const dims = await chrome.tabs.sendMessage(tab.id, { type: 'GET_DIMENSIONS' });
  let scrollY = 0, i = 0, shots = [];
  while (scrollY < dims.totalHeight) {
    await chrome.tabs.sendMessage(tab.id, { type: 'SCROLL_TO', y: scrollY });
    await delay(150);
    const dataUrl_ = await new Promise(res =>
      chrome.tabs.captureVisibleTab(tab.windowId, { format: imgType }, res));
    shots.push({ dataUrl: dataUrl_, y: scrollY });
    scrollY += dims.viewportHeight;
  }
  // optional tiles
  if (saveTiles) {
    shots.forEach((s, j) => {
      chrome.downloads.download({
        url: s.dataUrl, filename: `${base}_tile_${String(j).padStart(3, '0')}.${imgType}`
      });
    });
  }
  // stitch
  const imgs = await Promise.all(shots.map(s => dataUrlToBitmap(s.dataUrl)));
  const canvas = new OffscreenCanvas(imgs[0].width, Math.ceil(dims.totalHeight * dims.devicePixelRatio));
  const ctx = canvas.getContext('2d');
  imgs.forEach((img, k) => ctx.drawImage(img, 0, shots[k].y * dims.devicePixelRatio));
  const blob = await canvas.convertToBlob({ type: `image/${imgType}` });
  chrome.downloads.download({ url: URL.createObjectURL(blob), filename: `${base}_full.${imgType}` });
}

function toFilename(u) {
  const h = new URL(u).hostname.replace(/[^a-z0-9.-]/gi, '_');
  const ts = new Date().toISOString().replace(/[:.]/g, '-');
  return `Capture_${h}_${ts}`;
}
function dataUrl(str, mime) {
  return 'data:' + mime + ';charset=utf-8,' + encodeURIComponent(str);
}
function delay(ms) { return new Promise(r => setTimeout(r, ms)); }
async function dataUrlToBitmap(url) {
  const blob = await (await fetch(url)).blob();
  return createImageBitmap(blob);
}

self.logger.info('Service worker initialized');
