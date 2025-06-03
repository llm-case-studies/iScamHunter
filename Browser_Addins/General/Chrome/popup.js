// popup.js
// ——————————————
// Controls “All/None” toggles, populates scrollable‐pane checkboxes,
// then sends final capture‐options to background.js
// ——————————————

document.addEventListener("DOMContentLoaded", () => {
  const logEl = document.getElementById("log");

  function appendLog(msg) {
    const now = new Date().toLocaleTimeString();
    logEl.textContent += `[${now}]  ${msg}\n`;
    logEl.scrollTop = logEl.scrollHeight;
  }

  logger.info("Popup opened");
  appendLog("Popup rendering complete!");

  // ————————————
  // “All / None” buttons
  // ————————————
  document.getElementById("btn-all").addEventListener("click", () => {
    document.querySelectorAll('input[type=checkbox][data-id], input[type=checkbox][data-pane-id]')
      .forEach(cb => (cb.checked = true));
  });
  document.getElementById("btn-none").addEventListener("click", () => {
    document.querySelectorAll('input[type=checkbox][data-id], input[type=checkbox][data-pane-id]')
      .forEach(cb => (cb.checked = false));
  });

  // ————————————
  // Step 1: Detect scrollable panes
  // ————————————
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];

    chrome.tabs.sendMessage(tab.id, { type: "DETECT_PANES" }, (panes) => {
      if (chrome.runtime.lastError) {
        logger.warn("Could not reach capture.js – refresh the page and try again");
        appendLog("Could not reach capture.js – refresh and try again");
        return;
      }

      const paneList = document.getElementById("paneList");
      paneList.innerHTML = "";

      if (!panes || panes.length === 0) {
        const msgDiv = document.createElement("div");
        msgDiv.textContent = "No scrollable panes found.";
        paneList.appendChild(msgDiv);
      } else {
        panes.forEach((pane) => {
          const line = document.createElement("div");
          line.className = "pane-line";

          // (A) Pane label (e.g. “html (4575px)”)
          const lbl = document.createElement("div");
          lbl.className = "pane-label";
          lbl.textContent = `${pane.label} (${pane.height}px)`;
          line.appendChild(lbl);

          // (B) Four checkboxes: screenshot, outline, html, text
          ["screenshot", "outline", "html", "text"].forEach((action) => {
            const chk = document.createElement("input");
            chk.type = "checkbox";
            chk.dataset.paneId = pane.id;   // e.g. "0", "1", ...
            chk.dataset.action = action;     // e.g. "screenshot", ...
            // default: only “text” for panes
            chk.checked = (action === "text");

            const lbl2 = document.createElement("label");
            lbl2.className = "pane-checkbox-group";
            lbl2.appendChild(chk);
            const textNode = document.createTextNode(" " + action.charAt(0).toUpperCase() + action.slice(1));
            lbl2.appendChild(textNode);
            line.appendChild(lbl2);
          });

          paneList.appendChild(line);
        });
      }
    });
  });

  // ————————————
  // Step 2: When “Start Capture” is clicked
  // ————————————
  document.getElementById("start-btn").addEventListener("click", () => {
    appendLog("▶ Initiating capture…");
    logger.info("▶ Popup Start Capture clicked");

    // (A) Build the “main” array
    const opts = {};

    const mainSelections = [];
    let saveTiles = false;

    document.querySelectorAll('fieldset input[type=checkbox][data-id]').forEach((cb) => {
      if (!cb.checked) return;
      if (cb.dataset.id === "tiles") {
        saveTiles = true;
      } else {
        mainSelections.push(cb.dataset.id);
      }
    });

    opts.main = mainSelections;
    opts.saveTiles = saveTiles;

    // (B) Build each pane’s array
    document
      .querySelectorAll('#paneList input[type=checkbox][data-pane-id]')
      .forEach((chk) => {
        const pid = chk.dataset.paneId;      // “0”, “1”, “2”, …
        const action = chk.dataset.action;   // “screenshot”, “outline”, …
        if (!opts[pid]) opts[pid] = [];
        if (chk.checked) {
          opts[pid].push(action);
        }
      });

    appendLog("Selections: " + JSON.stringify(opts, null, 2));
    logger.info("▶ Capture options:", opts);

    // (C) Dispatch to background.js
    chrome.runtime.sendMessage(
      { type: "CAPTURE_WITH_OPTIONS", options: opts },
      (resp) => {
        if (chrome.runtime.lastError) {
          appendLog("❌ Error sending CAPTURE_WITH_OPTIONS—maybe background.js isn’t ready?");
          logger.error("Error sending CAPTURE_WITH_OPTIONS:", chrome.runtime.lastError);
        } else {
          appendLog("✅ Capture request dispatched.");
        }
      }
    );
  });
});
