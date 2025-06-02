// ─────────────────────────────────────────────────────────────────────────────────
// capture.js
//
// Content script: injected at "document_end" into every matching page.
// Must define `buildOutline(...)` and `inlineAllImagesAsDataURL(...)` so that
// `typeof buildOutline === "function"` from the page’s console.
//─────────────────────────────────────────────────────────────────────────────────

console.log("🐞 capture.js has been injected!");

/**
 * Take a snapshot outline of the entire document body (very basic example).
 * Returns a list of { tag, className, text (first 80 chars), depth }.
 */
function buildOutline(root) {
  const outline = [];
  function walk(node, depth) {
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    outline.push({
      tag: node.tagName.toLowerCase(),
      className: node.className || null,
      text: (node.innerText || "").trim().slice(0, 80),
      depth
    });
    node.childNodes.forEach(child => walk(child, depth + 1));
  }
  walk(root, 0);
  return outline;
}

/**
 * Inline all images by replacing each <img src="…"> with a data:URL version.
 * (Useful if you want to embed images directly in HTML.)
 */
function inlineAllImagesAsDataURL() {
  const imgs = Array.from(document.querySelectorAll("img[src]"));
  imgs.forEach(img => {
    const url = img.src;
    if (!url.startsWith("data:") && !url.startsWith("blob:")) {
      fetch(url)
        .then(resp => resp.blob())
        .then(blob => {
          const reader = new FileReader();
          reader.onload = () => {
            img.src = reader.result; // now a data:image/… URL
          };
          reader.readAsDataURL(blob);
        })
        .catch(err => {
          console.warn("Could not fetch image to inline:", url, err);
        });
    }
  });
}

// ─────────────────────────────────────────────────────────────────────────────────
// Listen for messages from the service worker.
//─────────────────────────────────────────────────────────────────────────────────
chrome.runtime.onMessage.addListener((msg, _sender, sendRes) => {
  if (msg.type === "CAPTURE_NOW") {
    // 1) Outer HTML of page
    const html = document.documentElement.outerHTML;
    // 2) Outline (as JSON)
    const outline = buildOutline(document.body);
    // 3) Plain text
    const text = document.body.innerText || "";
    sendRes({ html, outline, text });
    return true; // Will send async via sendRes()
  }

  if (msg.type === "GET_DIMENSIONS") {
    sendRes({
      totalHeight: document.documentElement.scrollHeight,
      viewportHeight: window.innerHeight,
      devicePixelRatio: window.devicePixelRatio || 1
    });
    return true;
  }

  if (msg.type === "SCROLL_TO") {
    window.scrollTo(0, msg.y || 0);
    sendRes(true);
    return true;
  }

  if (msg.type === "DETECT_PANES") {
    // Find every element whose scrollHeight > clientHeight by at least 20px
    // (i.e. it is “scrollable”)
    const panes = [...document.querySelectorAll("*")]
      .filter(el => el.scrollHeight - el.clientHeight > 20)
      .map((el, i) => ({
        id: String(i),
        label:
          el.id ||
          (el.className && el.className.split(" ")[0]) ||
          el.tagName.toLowerCase(),
        height: el.scrollHeight
      }));
    sendRes(panes);
    return true;
  }

  return false;
});
