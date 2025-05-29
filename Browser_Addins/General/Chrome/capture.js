// capture.js – waits for request then returns artefacts

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg?.type !== 'CAPTURE_NOW') return;

  // 1 – full page HTML
  const html = document.documentElement.outerHTML;

  // 2 – simple outline of key blocks
  const outline = [];
  document.querySelectorAll('h1,h2,h3,p,button,a').forEach(el => {
    outline.push({
      tag: el.tagName.toLowerCase(),
      id: el.id || null,
      cls: el.className || null,
      text: (el.innerText || '').trim().slice(0, 100)
    });
  });

  sendResponse({ html, outline });
  // Return true to indicate async response not needed further.
  return true;
});