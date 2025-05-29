# Extension Flavours & Cross‑Device Capture — 2025‑05‑28

> **Context:** We need a first‑party browser add‑on that lets *owners, support staff, beta testers,* and even *end‑users* capture fully‑rendered pages (HTML + PNG, optionally assets & cookies) for QA, migration, and bug‑reporting. The add‑on must work across major browsers and support mobile‑layout snapshots without triggering Cloudflare or other bot defences.

---

## 1 · Capture Flavours Matrix

| Flavour             | Target user              | Data captured                                                            | Upload target                                | Privacy guards                               |
| ------------------- | ------------------------ | ------------------------------------------------------------------------ | -------------------------------------------- | -------------------------------------------- |
| **Dev / Migration** | Internal devs on desktop | HTML, full‑page PNG, block‑outline JSON, images, CSS, *optional* cookies | `POST /snapshot` on LAN FastAPI              | None (trusted env)                           |
| **Support**         | Internal support staff   | Same as Dev + console & network logs                                     | `POST /snapshot` (auth token)                | Toggle to suppress cookies when handling PII |
| **Beta Tester**     | Semi‑trusted users       | Screenshot + anonymised DOM (emails hashed), *no* cookies                | `POST /snapshot/report` with reCAPTCHA token | Inline preview & consent modal               |
| **Public Reporter** | Any customer             | Viewport PNG only                                                        | S3 signed URL via `/report/upload`           | Max 5 MB, no HTML, no cookies                |

*Build script switches constants so one codebase yields all four flavours.*

---

## 2 · Browser & Device Coverage

| Platform                                    | Status / plan                                      | Notes                                                                                                                        |
| ------------------------------------------- | -------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **Chrome / Edge / Brave / Opera (desktop)** | ✦ Primary build — Manifest V3                      | Uses `chrome.tabs.captureVisibleTab`, `downloads`, `cookies`, `scripting`.                                                   |
| **Firefox (desktop)**                       | After Chromium build stabilises                    | Swap to `browser.*` polyfill; permissions identical.                                                                         |
| **Safari (macOS)**                          | Convert via Xcode “Safari Web Extension Converter” | Downloads API requires extra entitlement checkbox.                                                                           |
| **Firefox Android**                         | Build once desktop Firefox works                   | Good for real‑device mobile layout captures.                                                                                 |
| **Chrome Android / iOS Safari**             | Native extensions unavailable                      | Use desktop viewport emulation for responsive layout; full mobile capture relies on Firefox Android or Safari iOS (iOS 17+). |

---

## 3 · Mobile‑Layout Capture Options

1. **Desktop emulation** — content script calls `chrome.debugger.sendCommand(... 'Emulation.setDeviceMetricsOverride')` before snapshot.
2. **Real device** — Firefox Android build; user presses *Capture*.
3. **Hybrid batch** — PC opens each URL twice (desktop + emulated mobile) → two PNG/HTML files per slug.

---

## 4 · Asset Localisation Workflow

1. Parse saved HTML for `<img>` and CSS `url()` sources.
2. `fetch()` each asset → add to FormData ZIP.
3. Server‑side FastAPI stores under `snapshot/assets/` and rewrites HTML links to local paths.
4. Optional: download `<link rel="stylesheet">` CSS files the same way and inline them for complete offline render.

---

## 5 · Security & Privacy Checklist

* **CORS**: allow `chrome-extension://<ID>` origin on local FastAPI.
* **Token**: background script adds `X-Snapshot-Token` header unique to each build flavour.
* **PII scrubbing**: regex replace email / SSN patterns for beta/public builds.
* **Rate‑limit** public uploads to prevent abuse.

---

## 6 · Open Questions

1. Do we need batch navigation (auto‑open each URL) or is manual navigation acceptable?
2. Should the add‑on stitch viewport slices for very tall pages (> 16 000 px) or rely on HTML render for diffing?
3. Where to store large asset ZIPs long‑term (minio on LAN vs S3)?

---

## 7 · Next Steps

| ID   | Task                                                   | Owner             | When                      |
| ---- | ------------------------------------------------------ | ----------------- | ------------------------- |
|  F‑1 | Decide trigger style (auto vs manual) for each flavour | Alex & ChatGPT    | This week                 |
|  F‑2 | Scaffold Chromium Manifest V3 build (Dev flavour)      | ChatGPT           | Next session              |
|  F‑3 | Add FastAPI `/snapshot` & `/snapshot/report` endpoints | ChatGPT code stub | After scaffold            |
|  F‑4 | Write build script `npm run build:<flavour>`           | ChatGPT           | After Dev build validated |
|  F‑5 | Evaluate Firefox Android conversion                    | TBD               | Post‑MVP                  |

---

*Last updated 2025‑05‑28 by ChatGPT (o3) — inspired by owner chat re: extension ideas.*
