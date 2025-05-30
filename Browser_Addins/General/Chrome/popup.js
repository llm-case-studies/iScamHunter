// Browser_Addins/General/Chrome/popup.js
document.addEventListener('DOMContentLoaded', () => {
  const paneList      = document.getElementById('pane-list');
  const paneAreas     = document.getElementById('pane-list-areas');
  const btnAll        = document.getElementById('check-all');
  const btnNone       = document.getElementById('check-none');
  const btnStart      = document.getElementById('start-btn');
  const logDiv        = document.getElementById('log');

  // 1) Default main window = all
  const mainLi = paneList.querySelector('li[data-id="main"]');
  ['screenshot','outline','html','text'].forEach(opt => {
    mainLi.querySelector('.opt-' + opt).checked = true;
  });

  // 2) Discover scrollable panes
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tabId = tabs[0].id;
    chrome.tabs.sendMessage(tabId, { type: 'DETECT_PANES' }, (panes) => {
      if (chrome.runtime.lastError || !panes) {
        appendLog('Could not detect panes – refresh and try again');
        return;
      }
      panes.forEach(pane => {
        const li = document.createElement('li');
        li.dataset.id = pane.id;
        li.textContent = `${pane.label} (${pane.height}px) `;
        ['screenshot','outline','html','text'].forEach(opt => {
          const cb = document.createElement('input');
          cb.type = 'checkbox';
          cb.className = 'opt-' + opt;
          if (opt === 'text') cb.checked = true;         // default inner => Text
          const lbl = document.createElement('label');
          lbl.prepend(cb);
          lbl.append(' ' + opt.charAt(0).toUpperCase() + opt.slice(1));
          li.appendChild(lbl);
        });
        paneAreas.appendChild(li);
      });
    });
  });

  // 3) All / None controls
  btnAll.addEventListener('click', () => {
    document.querySelectorAll('input[type=checkbox]').forEach(cb => cb.checked = true);
  });
  btnNone.addEventListener('click', () => {
    document.querySelectorAll('input[type=checkbox]').forEach(cb => cb.checked = false);
  });

  // 4) Start capture – collect options & send
  btnStart.addEventListener('click', () => {
    const options = {};
    document.querySelectorAll('li').forEach(li => {
      const id = li.dataset.id;
      const sel = [];
      if (li.querySelector('.opt-screenshot').checked) sel.push('screenshot');
      if (li.querySelector('.opt-outline').checked)   sel.push('outline');
      if (li.querySelector('.opt-html').checked)      sel.push('html');
      if (li.querySelector('.opt-text').checked)      sel.push('text');
      options[id] = sel;
    });
    appendLog('Selections: ' + JSON.stringify(options));
    chrome.runtime.sendMessage({ type: 'CAPTURE_WITH_OPTIONS', options });
  });

  function appendLog(msg) {
    const line = document.createElement('div');
    line.textContent = msg;
    logDiv.appendChild(line);
    logDiv.scrollTop = logDiv.scrollHeight;
  }
});
