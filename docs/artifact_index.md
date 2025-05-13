# Scam Hunters Artifact Index (Phase 1)

This document contains **unique internal names** and descriptions of all reusable UI and content elements across the Scam Hunters effort. These names will be referenced in the journey map, Mermaid diagrams, page instructions, and future AI workflows.

---

## ✅ Pages (Primary Entry Points)

| Name                   | Path                       | Purpose                                             |
| ---------------------- | -------------------------- | --------------------------------------------------- |
| `home_main`            | `/`                        | Brand mission, intro to site, route to funnel/store |
| `funnel_intro_mat`     | `/mat`                     | Story-driven funnel landing for desk mat            |
| `confirmation_shared`  | `/order-confirmation`      | Unified thank-you page with next steps              |
| `storefront_main`      | `/store`                   | Browsable product catalog                           |
| `gear_collection_core` | `/collections/gear`        | Main gear (hoodie, mat, case)                       |
| `jokes_laugh_lasso`    | `/collections/laugh-lasso` | Joke product collection                             |

---

## 🧱 Sections / Blocks (Reusable Layout Units)

| Name                     | Type           | Used In                            | Purpose                                    |
| ------------------------ | -------------- | ---------------------------------- | ------------------------------------------ |
| `hero_intro_grandma`     | Hero Block     | `funnel_intro_mat`                 | Emotional story entry into funnel          |
| `cta_explore_gear`       | Button Row     | `home_main`, `confirmation_shared` | CTA to `/store`                            |
| `cta_join_posse`         | Button Row     | `home_main`, `storefront_main`     | Route to funnel from non-funnel areas      |
| `footer_standard_v1`     | Footer         | All pages                          | Consistent branding, links, FB badge       |
| `joke_teaser_card`       | Product Teaser | `confirmation_shared`, `home_main` | Suggest joke collection as post-engagement |
| `featured_gear_row`      | Product Grid   | `home_main`, `storefront_main`     | Highlight hoodie/mat                       |
| `announcement_banner_v1` | Banner         | `storefront_main`                  | Used for site-wide alerts or countdowns    |

---

## 🎨 Media Assets

| Name                   | Type        | Use Location          | Description                                         |
| ---------------------- | ----------- | --------------------- | --------------------------------------------------- |
| `logo_primary_cowgirl` | Logo        | All pages, FB profile | Brand logo, cowgirl with lasso                      |
| `profile_pic_fb`       | Image       | FB page profile       | Square headshot-style cowgirl image                 |
| `cover_img_fb_v1`      | Cover Image | FB page banner        | Branded collage with hoodie, mat, slogan            |
| `joke_card_001`        | Image       | Store + social        | First rendered joke image "Sir, this is not a scam" |

