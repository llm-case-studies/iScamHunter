// ────────────────────────────────────────────────────────────────────
// logger.js
//
// “Minimal viable” logger for both the service worker (background.js)
// and the popup (popup.js).  Simply wraps console.log with levels.
//─────────────────────────────────────────────────────────────────────

const LEVELS = { debug: 1, info: 2, warn: 3, error: 4 };
const CURRENT_LEVEL = LEVELS.debug; // change to “info” or “warn” to silence debug

function makeLogger(namespace) {
  return {
    debug: (...args) => {
      if (CURRENT_LEVEL <= LEVELS.debug) {
        console.log(`[D] ${namespace}:`, ...args);
      }
    },
    info: (...args) => {
      if (CURRENT_LEVEL <= LEVELS.info) {
        console.log(`[I] ${namespace}:`, ...args);
      }
    },
    warn: (...args) => {
      if (CURRENT_LEVEL <= LEVELS.warn) {
        console.warn(`[W] ${namespace}:`, ...args);
      }
    },
    error: (...args) => {
      if (CURRENT_LEVEL <= LEVELS.error) {
        console.error(`[E] ${namespace}:`, ...args);
      }
    }
  };
}

// In a content script or popup, “self” is the global object.  In the service worker,
// “self” is also the worker’s global object.  Either way, attaching “logger” to self:
self.logger = makeLogger(
  chrome.runtime.id ? chrome.runtime.id.slice(-4) : "----"
);
