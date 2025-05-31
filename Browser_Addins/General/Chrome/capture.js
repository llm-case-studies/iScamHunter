// Browser_Addins/General/Chrome/capture.js
// (Same as before, with CAPTURE_NOW, GET_DIMENSIONS, SCROLL_TO, DETECT_PANES)
// No change needed here unless you want to filter out unwanted data.
// It already returns html, outline, text on CAPTURE_NOW.
chrome.runtime.onMessage.addListener((msg, _sender, sendRes) => {

  logger.debug('capture.js got message', msg);

  if (msg.type === 'CAPTURE_NOW') {
    logger.info('Handling CAPTURE_NOW');
    const html    = document.documentElement.outerHTML;
    const outline = buildOutline(document.body);
    const text    = document.body.innerText || '';
    sendRes({ html, outline, text });
    return true;
  }
  if (msg.type === 'GET_DIMENSIONS') {
    sendRes({
      totalHeight: document.documentElement.scrollHeight,
      viewportHeight: window.innerHeight,
      devicePixelRatio: window.devicePixelRatio || 1
    });
    return true;
  }
  if (msg.type === 'SCROLL_TO') {
    window.scrollTo(0, msg.y || 0);
    sendRes(true);
    return true;
  }
  if (msg.type === 'DETECT_PANES') {
    // existing pane detection…
    const panes = [...document.querySelectorAll('*')]
      .filter(el => el.scrollHeight - el.clientHeight > 20)
      .map((el,i) => ({
        id: String(i),
        label: el.id || el.className.split(' ')[0] || el.tagName.toLowerCase(),
        height: el.scrollHeight
      }));
    sendRes(panes);
    return true;
  }
});
