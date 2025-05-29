// capture.js – Universal Page Capture v0.4
// --------------------------------------------------
// Injected into every page. Responds to messages from background:
//   • CAPTURE_NOW      –> returns { html, outline }
//   • GET_DIMENSIONS   –> returns { totalHeight, viewportHeight, devicePixelRatio }
//   • SCROLL_TO y      –> scrolls window to y (px) and acks true
//
// Outline = array of simplified nodes: { tag, id, cls, text }
// Used for quick diffing / text‑search downstream.

(() => {
  // ------------------------------------------------
  // Helpers
  // ------------------------------------------------
  function buildOutline(root) {
    const out = [];
    root.querySelectorAll('h1,h2,h3,h4,p,li,button,a,span').forEach(el => {
      out.push({
        tag: el.tagName.toLowerCase(),
        id: el.id || null,
        cls: (el.className || '').trim() || null,
        text: (el.innerText || '').trim().slice(0, 120)
      });
    });
    return out;
  }

  // ------------------------------------------------
  // Message router
  // ------------------------------------------------
  chrome.runtime.onMessage.addListener((msg, _sender, sendResp) => {
    if (!msg || !msg.type) return false; // ignore others

    if (msg.type === 'CAPTURE_NOW') {
      const html = document.documentElement.outerHTML;
      const outline = buildOutline(document.body);
      sendResp({ html, outline });
      return true; // async reply
    }

    if (msg.type === 'GET_DIMENSIONS') {
      sendResp({
        totalHeight: document.documentElement.scrollHeight,
        viewportHeight: window.innerHeight,
        devicePixelRatio: window.devicePixelRatio || 1
      });
      return true;
    }

    if (msg.type === 'SCROLL_TO') {
      window.scrollTo(0, msg.y || 0);
      sendResp(true);
      return true;
    }
  });
})();
