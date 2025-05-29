# Universal Page‑Capture Extension – v0.3 scaffold  (2025‑05‑28)

> **Fix:** v0.2 relied on a message sent automatically on page load, which often fires before you click the toolbar button. v0.3 switches to an explicit *request–reply* flow — the background script sends `CAPTURE_NOW`, the content script grabs artefacts and replies, then the background saves files.

---

## manifest.json

```jsonc
{
  "manifest_version": 3,
  "name": "Universal Page Capture",
  "version": "0.3",
  "description": "One‑click HTML + screenshot + outline saver for any page.",
  "permissions": ["activeTab", "downloads", "scripting", "tabs"],
  "action": {
    "default_title": "Capture page",
    "default_icon": {
      "16": "icon16.png"
    }
  },
  "icons": {
    "16": "icon16.png",
    "32": "icon32.png",
    "48": "icon48.png",
    "128": "icon128.png"
  },
  "content_scripts": [{
    "matches": ["<all_urls>"],
    "js": ["capture.js"],
    "run_at": "document_idle"
  }],
  "background": {
    "service_worker": "background.js"
  }
}
```

---

## background.js (service‑worker)

```javascript
// background.js – one‑click capture pipeline

chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.id) return;

  // Ask the content script in this tab to collect HTML & outline
  const response = await chrome.tabs.sendMessage(tab.id, { type: 'CAPTURE_NOW' })
                     .catch(() => null);
  if (!response || !response.html || !response.outline) {
    console.warn('Capture: no response from content script');
    return;
  }

  // Derive filenames
  const ts   = new Date().toISOString().replace(/[-:T]/g, '').slice(0, 15);
  const host = new URL(tab.url).hostname.replace(/[^a-zA-Z0-9.-]/g, '_');
  const base = `Capture_${host}_${ts}`;

  // helper: build data‑URL on the fly (URL.createObjectURL is *undefined* in MV3 service‑workers).
  const toDataUrl = (str, mime) => 'data:' + mime + ';charset=utf-8,' + encodeURIComponent(str);

  // 1 – save HTML
  chrome.downloads.download({
    url: toDataUrl(response.html, 'text/html'),
    filename: `${base}.html`
  });

  // 2 – save outline JSON
  chrome.downloads.download({
    url: toDataUrl(JSON.stringify(response.outline, null, 2), 'application/json'),
    filename: `${base}.json`
  });

  // 3 – capture screenshot (visible viewport)
  chrome.tabs.captureVisibleTab(tab.windowId, { format: 'png' }, (dataUrl) => { (full page)
  chrome.tabs.captureVisibleTab(tab.windowId, { format: 'png' }, (dataUrl) => {
    if (chrome.runtime.lastError || !dataUrl) {
      console.warn('Screenshot failed', chrome.runtime.lastError);
      return;
    }
    chrome.downloads.download({
      url: dataUrl,
      filename: `${base}.png`
    });
  });
});
```

---

## capture.js (content script)

```javascript
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
```

---

## Quick install / reload

```
# Ensure the three files + icons are in the extension folder
chrome://extensions  →  Load unpacked  (or Reload)
```

Now click the cowgirl icon on any page and check **Downloads** — you should see three files for today’s date.
