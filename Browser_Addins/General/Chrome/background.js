// ─────────────────────────────────────────────────────────────────────────────
// Browser_Addins/General/Chrome/background.js
//
// Background service worker (Manifest V3).  Listens for popup messages and
// invokes fullPageCapture(...) when “screenshot” is requested.
// ─────────────────────────────────────────────────────────────────────────────

import './logger.js';                // ensure “self.logger” exists
import { fullPageCapture } from './screenshot.js';


self.logger.info("Service worker starting…");

// (Optional) Throttle constant if you want another layer of rate limiting
const MIN_INTERVAL_MS = 350;
let lastCapture = 0;

chrome.action.onClicked.addListener((tab) => {
  // If user clicks the icon without opening the popup, we default to HTML+outline
  chrome.runtime.sendMessage({
    type: "CAPTURE_WITH_OPTIONS",
    options: { main: ["screenshot", "outline", "html"] },
  });
});

// When popup sends “CAPTURE_WITH_OPTIONS”, runCaptureWithOptions(...) is invoked
chrome.runtime.onMessage.addListener((msg, _sender, sendResp) => {
  if (msg.type !== "CAPTURE_WITH_OPTIONS") return;

  const opts = msg.options || {};
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    runCaptureWithOptions(tab, opts).catch((err) => {
      console.error("runCaptureWithOptions threw:", err);
      self.logger.error("▶ runCaptureWithOptions error:", err);
    });
  });

  return true; // signal “I will respond asynchronously (if needed)”
});

/**
 * Given a tab and a set of options, perform:
 *   1) Send CAPTURE_NOW to capture.js to get { html, outline, text }
 *   2) Download main html/json/txt if requested.
 *   3) Call fullPageCapture(...) if screenshot requested.
 *   4) (Later) Perform pane captures (not yet implemented).
 */
async function runCaptureWithOptions(tab, opts) {
  self.logger.info("▶ Capture started for", tab.url, opts);

  // Step 1: get html / outline / text from capture.js
  let resp;
  try {
    resp = await chrome.tabs.sendMessage(tab.id, { type: "CAPTURE_NOW" });
  } catch (err) {
    self.logger.error("Error sending CAPTURE_NOW—maybe capture.js isn’t injected?", err);
    return;
  }
  if (!resp) {
    self.logger.warn(
      "No response from capture.js (resp was undefined). Did you refresh the page?"
    );
    return;
  }
  self.logger.debug("→ Received CAPTURE_NOW response", resp);

  // Build the “base” filename prefix
  const base = toFilename(tab.url);

  // Step 2: Download main window artifacts
  const mainOpts = opts.main || []; // e.g. ["screenshot","outline","html","text"]

  // HTML
  if (mainOpts.includes("html")) {
    self.logger.debug("Saving HTML:", `${base}.html`);
    chrome.downloads.download({
      url: dataUrl(resp.html, "text/html"),
      filename: `${base}.html`,
    });
  }

  // Outline (JSON)
  if (mainOpts.includes("outline")) {
    self.logger.debug("Saving OUTLINE JSON:", `${base}.json`);
    chrome.downloads.download({
      url: dataUrl(JSON.stringify(resp.outline, null, 2), "application/json"),
      filename: `${base}.json`,
    });
  }

  // Text
  if (mainOpts.includes("text")) {
    self.logger.debug("Saving TEXT:", `${base}.txt`);
    chrome.downloads.download({
      url: dataUrl(resp.text, "text/plain"),
      filename: `${base}.txt`,
    });
  }

  // Screenshot (full page)
  if (mainOpts.includes("screenshot")) {
    try {
      await fullPageCapture(tab, base, { saveTiles: false, imgType: "png" });
      self.logger.info("✓ fullPageCapture complete for", `${base}_full.png`);
    } catch (err) {
      self.logger.error("[E] fullPageCapture failed to convert stitched canvas to Blob:", err);
    }
  }

  // Step 3: Panes (future—currently just logs a warning)
  Object.entries(opts)
    .filter(([k]) => k !== "main")
    .forEach(async ([paneId, actions]) => {
      if (actions.length > 0) {
        self.logger.warn("Pane capture not yet implemented for pane:", paneId, actions);
      }
    });
}

/**
 * Convert a string → a dataURL with the given MIME type.
 */
function dataUrl(str, mime) {
  return "data:" + mime + ";charset=utf-8," + encodeURIComponent(str);
}

/**
 * Turn any URL into a “safe” filename prefix.  E.g. 
 *   "https://www.foo.com/" → "Capture_www.foo.com_2025-06-01T…"
 */
function toFilename(url) {
  const u = new URL(url);
  const host = u.hostname.replace(/[^a-z0-9.-]/gi, "_");
  const ts = new Date()
    .toISOString()
    .replace(/[:.]/g, "-"); // e.g. "2025-06-01T21-55-44-514Z"
  return `Capture_${host}_${ts}`;
}

self.logger.info("Service worker initialized");
