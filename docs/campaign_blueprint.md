# Scam Hunters Campaign Blueprint – v0.4  (2025‑05‑27)

> **Meta‑goal:** Maintain a *platform‑agnostic*, self‑contained bundle of business context, copy, assets, and test specs so any AI or human can spin up, migrate, or debug the Scam Hunters funnel in a fresh workspace with zero knowledge loss.

---

## 1 · Business Narrative (cheat‑sheet)

| Item           | Current draft                                                                   |
| -------------- | ------------------------------------------------------------------------------- |
| Core promise   | “Spot scams before they spot you.”                                              |
| Ideal customer | Adults 25‑55 who shop or invest online and fear being duped.                    |
| Offer stack    | ① Scam Hunters Starter Kit (ebook + checklist) ② Mini‑course ③ Community access |
| Brand voice    | Confident, witty, slightly irreverent; uses light humour to disarm fear.        |

### ICP Pains → Gains

| Pain                                              | How Scam Hunters Solves It                           |
| ------------------------------------------------- | ---------------------------------------------------- |
| “Too busy to research every scam.”                | Weekly 5‑min digest + humour recap                   |
| “Feels embarrassing to ask questions.”            | Anonymous community, playful tone                    |
| “Info online is either boring or fear‑mongering.” | Relatable stories + jokes that educate without panic |

*(Full copy decks live under `/copy/` and export CSV.)*

---

## 2 · Funnel Flow Diagram (Mermaid)

```mermaid
flowchart TD
    A[User Lands on ScamHunters Entry Point] --> B{Entry Channel}
    
    B -->|Funnel Ad / Link| C[funnel_start_mat (/mat)]
    B -->|Direct Visit| D[home_main (/)]
    B -->|Facebook Post| E[FB Page / Story]
    B -->|Search| G[storefront_main (/store)]
    B -->|Other Social (IG / X / TG)| SM_OTHER[(IG / X / TG Posts)]

    %% Funnel Flow
    C --> C1[Reads Personal Story (hero_intro_grandma)]
    C1 --> C2[Clicks 'Get the Mat' (cta_get_mat)]
    C2 --> C3[Checkout Page]
    C3 --> C4[Confirmation Page (/order-confirmation)]
    C4 --> C5[Suggested Gear or Joke]
    C5 --> G

    %% Homepage Flow
    D --> D1[Reads Mission / Intro CTA]
    D1 -->|Explore Gear| G
    D1 -->|Join Posse| C
    D1 --> optin_email[Footer Email Sign-up]

    %% Facebook Flow
    E --> E1[Clicks FB Post]
    E1 -->|Product| G
    E1 -->|Joke| J[jokes_laugh_lasso (/collections/laugh-lasso)]
    E1 -->|Join Funnel| C

    %% Other Social Flow
    SM_OTHER -->|Product| G
    SM_OTHER -->|Join Funnel| C

    %% Store Path
    G --> G1[Browse Products]
    G1 --> G2[Clicks Hoodie / Mat / Case]
    G2 --> G3[Store Checkout]
    G3 --> C4

    %% Joke Path
    J --> J1[Clicks Joke Product]
    J1 -->|Punchline Shown| J2[Engages / Shares / Buys Gear]
    J2 --> G

    %% Outcomes
    G -->|Leaves| Z[Done for Now]
    G -->|Follow FB| FB[Joins Community]

```

> **Note:** Any slug change → update both the diagram *and* `urls.txt` **before** running `tools/capture.py`.

---

## 3 · Implementation Snapshot Plan

| Folder / File                                | Contents                           |
| -------------------------------------------- | ---------------------------------- |
| `urls.txt`                                   | List of live CF URLs (edit first!) |
| `snapshot/screens/`                          | Full‑page PNG screenshots          |
| `snapshot/html/`                             | Raw HTML per page                  |
| `snapshot/blocks/`                           | Simplified DOM JSON outline        |
| `/emails/`                                   | MJML / HTML templates              |
| `tests/scam_hunters.postman_collection.json` | Automated smoke tests              |

> The Playwright script (`tools/capture.py`) captures & refreshes all snapshot folders.

---

## 4 · Living Docs & Decision Log

| Doc/File                   | Purpose                                  |
| -------------------------- | ---------------------------------------- |
| `campaign_blueprint.md`    | Single source of truth (this file)       |
| `integration_report.md`    | Auto‑filled audit checklist              |
| `/docs/decisions/ADR-*.md` | Architecture / strategy decision records |

---

## 📂  Required Context Files for Fresh Session

When starting a **new AI or human workspace**, attach or paste **all** files below.  
If any are missing, prompt the user to provide them **before** proceeding.

| # | File                                   | Why it matters                                               |
|---|----------------------------------------|--------------------------------------------------------------|
| 1 | `docs/campaign_blueprint.md`           | Master roadmap & meta-goal                                   |
| 2 | `docs/urls.txt`                        | Canonical page list for snapshots                            |
| 3 | `docs/urls_description.md`             | Intent for every URL (human-readable)                        |
| 4 | `docs/artifact_index.md`               | Registry of reusable blocks & copy                           |
| 5 | `docs/journey_map.md`                  | Mermaid flow + page→artifact matrix                          |
| 6 | `docs/integration_report.md`           | Running audit checklist (auto-updated)                       |
| 7 | `docs/social_channels.md` *(optional)* | Tone & CTA guide for FB / IG / X / TG                         |
| 8 | `snapshot/` folder *(optional)*        | Latest Playwright captures (screens/html)                    |

> **First-load procedure**  
> 1. Load the files above.  
> 2. If `urls.txt` changed, update before running `tools/capture.py`.  
> 3. Use `artifact_index.md` as the authoritative mapping for block IDs and copy.

---

---

## 5 · Immediate TODOs

| 🔥/★/☆ | Task                                        | Owner   | Tracker | Status |
| ------ | ------------------------------------------- | ------- | ------- | ------ |
| 🔥     | Finalise Playwright capture script          | ChatGPT | GH #12  | ☐      |
| 🔥     | Populate `urls.txt` with live CF page URLs  | Alex    | GH #13  | ☐      |
| ★      | Export current copy decks to CSV            | ChatGPT | GH #14  | ☐      |
| ★      | Draft welcome & order‑confirmation MJML     | ChatGPT | GH #15  | ☐      |
| ☆      | Set up GitHub Action to run capture nightly | Alex    | GH #16  | ☐      |

---

## 6 · Artifact Audit Checklist  *(auto‑filled)*

| Page ID                    | Screenshot | Blocks ✔ | Matches Index | Notes |
| -------------------------- | ---------- | -------- | ------------- | ----- |
| `home_main`                | ☐          | ☐        | ☐             |       |
| `funnel_intro_mat`         | ☐          | ☐        | ☐             |       |
| `confirmation_shared`      | ☐          | ☐        | ☐             |       |
| `storefront_main`          | ☐          | ☐        | ☐             |       |
| `jokes_laugh_lasso`        | ☐          | ☐        | ☐             |       |
| **Emails**                 | —          | —        | —             |       |
| `email_order_confirmation` | ☐          | ☐        | ☐             |       |
| `email_welcome_series_1`   | ☐          | ☐        | ☐             |       |

*(Run `tools/capture.py` to update.)*

---

## 7 · Test Cases

| Scenario                           | Expected                                     | Test ID      |
| ---------------------------------- | -------------------------------------------- | ------------ |
| Funnel mat purchase end‑to‑end     | Order succeeds; email + confirm page visible | PUR‑SMOKE‑01 |
| GET `/order-confirmation`          | 200 OK; text “Check your email” present      | CONF‑200‑TXT |
| Stripe `payment_succeeded` webhook | n8n sends order‑confirmation email           | WEB‑STR‑01   |

---

## 8 · Change Log

| Date       | Version | Notes                                                                                   |
| ---------- | ------- | --------------------------------------------------------------------------------------- |
| 2025‑05‑27 | v0.4    | Added ICP pain→gain, email opt‑in node, urls.txt note, email audit rows, smoke test ID. |
| 2025‑05‑27 | v0.3    | Added Mermaid funnel diagram; renumbered sections.                                      |
| 2025‑05‑27 | v0.2    | Rewrote doc: meta‑goal, narrative, snapshot plan, TODO & test list.                     |
