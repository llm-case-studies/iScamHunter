// background.js – one-click capture pipeline

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

  // helper: build data-URL on the fly (URL.createObjectURL is undefined in MV3 workers)
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

  // 3 – save a PNG of the **visible viewport**
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
