// capture.js – Universal Page Capture v0.5 (with DETECT_PANES)
// -------------------------------------------------------------------------
// Injected into every page. Handles messages from the extension:
//   • CAPTURE_NOW      → returns rendered HTML + outline
//   • GET_DIMENSIONS   → returns { totalHeight, viewportHeight, devicePixelRatio }
//   • SCROLL_TO y      → scrolls main window to y
//   • DETECT_PANES     → finds scroll‑able elements and returns [{id, label, height}]

(function () {
  // Helper – build lightweight outline for diffs / search
  function buildOutline(root) {
    const arr = [];
    root.querySelectorAll('h1,h2,h3,p,button,a').forEach((el) => {
      arr.push({
        tag: el.tagName.toLowerCase(),
        id: el.id || null,
        cls: el.className || null,
        text: (el.innerText || '').trim().slice(0, 100),
      });
    });
    return arr;
  }

  // Helper – give each detected pane a stable data‑id attribute for later capture
  function ensurePaneId(el, id) {
    if (!el.dataset.shPane) el.dataset.shPane = id;
  }

  // ---------------------------------------------------------------------
  chrome.runtime.onMessage.addListener((msg, _sender, sendResp) => {
    if (!msg || !msg.type) return false;

    // a) full page capture request
    if (msg.type === 'CAPTURE_NOW') {
      const html = document.documentElement.outerHTML;
      const outline = buildOutline(document.body);
      sendResp({ html, outline });
      return true; // async ok
    }

    // b) dimensions of main window
    if (msg.type === 'GET_DIMENSIONS') {
      sendResp({
        totalHeight: document.documentElement.scrollHeight,
        viewportHeight: window.innerHeight,
        devicePixelRatio: window.devicePixelRatio || 1,
      });
      return true;
    }

    // c) scroll main window
    if (msg.type === 'SCROLL_TO') {
      window.scrollTo(0, msg.y || 0);
      sendResp(true);
      return true;
    }

    // d) discover scroll‑able panes (Phase‑2)
    if (msg.type === 'DETECT_PANES') {
      const panes = [];
      const els = document.querySelectorAll('*');
      let pid = 0;
      els.forEach((el) => {
        const style = getComputedStyle(el);
        const scrollable = el.scrollHeight - el.clientHeight > 20;
        if (scrollable) {
          ensurePaneId(el, pid);
          panes.push({
            id: pid,
            label: el.getAttribute('aria-label') || el.id || el.className || 'pane',
            height: el.scrollHeight,
          });
          pid += 1;
        }
      });
      sendResp(panes);
      return true;
    }
  });
})();
