# Scroll‑able Pane Capture & Multi‑Purpose Use‑Cases — 2025‑05‑28

> **Goal:** Extend the Universal Page Capture extension so it can discover every scroll‑able sub‑pane, let the user decide whether to save *pixels + text*, *text‑only*, or *skip*, and output artefacts that downstream pipelines (migration, scam reporting, tab organiser) can ingest without prior configuration.

---

## 1 · Key Future Applications

| ID     | Scenario                            | How the extension’s artefacts help                                                                             |
| ------ | ----------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **A1** | **Site migration / re‑platforming** | Full HTML + outline + stitched/tile PNGs → devs rebuild on React/Shopify and diff copy.                        |
| **A2** | **Scam evidence capture**           | Stitched PNG + text outline of chat feed provides immutable record for reports.                                |
| **A3** | **Intelligent tab/page organiser**  | Outline JSON & text extracted from panes are indexed into vector DB → semantic search cross‑browser & devices. |
| **A4** | **Support ticket attachment**       | End‑user clicks once → ZIP with screenshot & text, attached to help‑desk ticket.                               |
| **A5** | **Regulated UI audit**              | Per‑pane tiles ensure every pixel of financial/medical dashboard is archived nightly.                          |

---

## 2 · Scrollable Pane Strategy

| Phase   | Feature                                                              | Default Behaviour (zero config)                                                   |
| ------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| **P‑1** | *Main‑window* scroll‑and‑stitch (✅ baseline)                         | Saves **tiles** + **full.png** automatically.                                     |
| **P‑2** | **Pane detection** (`scrollHeight > clientHeight + 30`)              | Popup lists panes pre‑checked as **Text‑only** to keep captures lightweight.      |
| **P‑3** | **User choice per pane**<br>▢ Pixels + Text<br>▢ Text‑only<br>▢ Skip | User can upgrade any pane to **Pixels + Text** for visual fidelity.               |
| **P‑4** | **Asset downloader** for selected panes/pages                        | Images & CSS fetched, links rewritten → offline‑perfect snapshot.                 |
| **P‑5** | **ZIP bundling & FastAPI hand‑off**                                  | All chosen artefacts zipped and optionally POSTed to `http://127.0.0.1/snapshot`. |

---

## 3 · Config Flags (future)

| Flag              | Values         | Default              | Notes                                          |
| ----------------- | -------------- | -------------------- | ---------------------------------------------- |
| `CAPTURE_TILES`   | true / false   | **true**             | Saves each viewport tile PNG before stitching. |
| `IMAGE_TYPE`      | `png` / `webp` | **png**              | WebP toggle saves \~30 % space.                |
| `CAPTURE_MOBILE`  | true / false   | **false**            | When true, second pass at 390 px width.        |
| `SCROLL_DELAY_MS` | integer        | **150**              | Wait after each scroll; tweak for heavy pages. |
| `OUTPUT_DIR`      | string         | `Downloads/Captures` | Future file‑picker in popup.                   |

---

## 4 · Open Questions

1. Should “Text‑only” capture include **innerHTML** or **innerText**? (InnerText is lighter but loses basic formatting.)
2. Need a progress indicator? (Toast vs badge vs spinner in popup.)
3. Mobile variant: emulate one preset width or let user type custom?
4. Storage: ZIP everything by default, or only when > N MB / multiple panes?

---

## 5 · Next Steps

1. **Implement P‑1 code patch (tiles + stitched full.png).**
2. Add a popup checkbox skeleton for “List scroll‑able panes (beta)”—disabled until P‑2.
3. Draft `pane_capture.js` helper to handle scroll & stitch inside any element.
4. Schedule a code review after P‑1 commit to decide whether to fast‑track P‑2 or jump to asset downloader.

✱ *This idea card logged to ensure future AI teammates pick up the scroll‑pane roadmap without re‑inventing the wheel.*
