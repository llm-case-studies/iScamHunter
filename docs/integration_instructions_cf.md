# Integration Instructions – ClickFunnels & Site Alignment  
*(Phase 2 hand-off)*

## 🎯 Objective
Create a seamless, brand-accurate experience across Funnel, Store, Home, and Email by:

1. Auditing every artifact in the live CF site versus `artifact_index.md`.
2. Fixing navigation / redirects so users never dead-end or loop.
3. Normalising page titles, slugs, and internal CF names to our artifact IDs.
4. Wiring confirmation + follow-up emails.
5. Running an end-to-end test plan.

---

## 1. Artifact Audit Checklist

| Page ID | Expected Artifacts | Screenshot Needed? | Matches Index? |
|---------|-------------------|--------------------|----------------|
| `home_main` | `featured_gear_row`, `cta_join_posse`, `footer_unified_v1` | ⬜ | ⬜ |
| `funnel_intro_mat` | `hero_intro_grandma`, `footer_unified_v1` | ⬜ | ⬜ |
| `confirmation_shared` | `joke_teaser_card`, `cta_explore_gear`, `footer_unified_v1` | ⬜ | ⬜ |
| `storefront_main` | `featured_gear_row`, `announcement_banner_v1`, `cta_join_posse`, `footer_unified_v1` | ⬜ | ⬜ |
| `jokes_laugh_lasso` | `joke_card_001`, `footer_unified_v1` | ⬜ | ⬜ |

**Task:**  
*For each row, open CF editor → take a screenshot → verify block names. If artifact is missing or differs, log it in `artifact_index.md` with correct status.*

---

## 2. Navigation / Redirect Fixes

- **Funnel checkout →** must redirect to **`/order-confirmation`** (`confirmation_shared`).
- **Store checkout →** same confirmation page.
- **Home “Explore Gear” CTA →** `/store`.
- **Home “Join Posse” CTA →** `/mat` (funnel intro).
- Verify footer logo links **all** point to `/`.

---

## 3. Naming & Slug Consistency

**Rule:** internal CF “Page Title” and path should match `artifact_index.md` IDs where possible.

| Desired Path | Current CF Slug | Needs Change? |
|--------------|-----------------|---------------|
| `/mat` | `/sales-page--9a719` | ⬜ |
| `/order-confirmation` | `<current>` | ⬜ |
| `/collections/gear` | `<current>` | ⬜ |

---

## 4. Email Wiring Tasks

1. CF **Automations → Post-Purchase**  
   - Trigger = purchase completed  
   - Sender = `noreply@iscamhunter.com` (SMTP verified)  
   - Subject = “You’re in the Posse – Order #{{order_id}}”

2. Add **Shipping Confirmation** placeholder (Zendrop webhook or manual for now).

---

## 5. End-to-End Test Plan

| Test | Steps | Pass / Fail |
|------|-------|-------------|
| Funnel Mat Purchase | Visit `/mat` → buy mat (test card) → lands on confirmation page | ⬜ |
| Store Hoodie Purchase | Visit `/store` → buy hoodie → confirmation page | ⬜ |
| Confirmation Email | Confirm email received within 5 min | ⬜ |
| Footer Links | Click footer “About Us” → opens page | ⬜ |
| FB Share | Click FB link on confirmation → FB page opens | ⬜ |

---

## 6. Reporting

Update this doc with ✅ / ❌ for each task & test; commit as `integration_report_<date>.md`.

---

*Created 2025-05-11 – Source chat hand-off.*
