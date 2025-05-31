// Browser_Addins/General/Chrome/capture.js

(() => {
  // Helper: construct a hierarchical “outline” of the DOM
  function buildOutline(root) {
    // We will walk the tree and record each node’s tagName, 
    // plus any id/class to help identify it later.
    const outline = [];

    // Recursive depth-first traversal
    function walk(node, depth) {
      // Only element nodes
      if (node.nodeType !== Node.ELEMENT_NODE) return;

      const tag = node.tagName.toLowerCase();
      const id = node.id ? `#${node.id}` : '';
      const cls = node.className ? `.${node.className.split(' ').join('.')}` : '';
      const label = `${tag}${id}${cls}`;

      outline.push({ label, depth, scrollHeight: node.scrollHeight, clientHeight: node.clientHeight });

      // Recurse into children
      for (let child of node.children) {
        walk(child, depth + 1);
      }
    }

    // Start at depth 0 for <body>
    walk(root, 0);
    return outline;
  }

  // --------------------------------------------------
  // Message router: handle four message types
  // --------------------------------------------------
  chrome.runtime.onMessage.addListener((msg, _sender, sendRes) => {
    logger.debug('capture.js got message', msg);

    // ——— 1) CAPTURE_NOW: return HTML + outline + text ———
    if (msg.type === 'CAPTURE_NOW') {
      logger.info('Handling CAPTURE_NOW');
      const html = document.documentElement.outerHTML;
      const outline = buildOutline(document.body);
      const text = document.body.innerText || '';
      sendRes({ html, outline, text });
      return true;  // must return true so Chrome knows we'll call sendRes asynchronously
    }

    // ——— 2) GET_DIMENSIONS: return total scroll height + viewport height + pixel ratio ———
    if (msg.type === 'GET_DIMENSIONS') {
      sendRes({
        totalHeight: document.documentElement.scrollHeight,
        viewportHeight: window.innerHeight,
        devicePixelRatio: window.devicePixelRatio || 1
      });
      return true;
    }

    // ——— 3) SCROLL_TO: scroll window to msg.y ———
    if (msg.type === 'SCROLL_TO') {
      window.scrollTo(0, msg.y || 0);
      sendRes(true);
      return true;
    }

    // ——— 4) DETECT_PANES: find scrollable elements and return metadata ———
    if (msg.type === 'DETECT_PANES') {
      // Only include elements whose computed overflow-y is 'auto' or 'scroll'
      // and whose scrollHeight > clientHeight by at least 20px. Also skip <html> and <body>.
      const threshold = 20;
      const panes = Array.from(document.querySelectorAll('*')).filter(el => {
        if (el === document.documentElement || el === document.body) return false;
        const style = getComputedStyle(el);
        const oy = style.overflowY;
        return (oy === 'auto' || oy === 'scroll')
          && (el.scrollHeight - el.clientHeight > threshold);
      }).map((el, i) => ({
        id: String(i),
        label: el.id
          ? `#${el.id}`
          : el.getAttribute('aria-label')
            ? `aria:${el.getAttribute('aria-label')}`
            : el.className
              ? `.${el.className.split(' ')[0]}`
              : el.tagName.toLowerCase(),
        height: el.scrollHeight
      }));

      sendRes(panes);
      return true;
    }

    return false;  // ignore any other messages
  });
})();
