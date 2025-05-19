# Scam Hunters Artifact Index

This document catalogs all branded, structural, and reusable artifacts across our **Funnel**, **Website / Store**, **Learning Hub**, and **Social Media**.  Each artifact has a **unique ID** that is referenced from the user‑journey map (`journey_map.md`).

*Use the optional YAML header for any artifact that needs machine‑readable metadata (e.g., for automated builds or AI parsing).*

---

## ⚙️  Artifact Block Format (optional)

```yaml
---
id: hero_intro_grandma
platform: funnel            # funnel | site | store | learning | social
path: /sales-page--9a719    # if applicable
used_on: [funnel_intro_mat] # page IDs where this artifact appears
type: section               # page | section | block | button | image | post | video
status: active              # active | draft | planned | deprecated
image: /media/screenshots/hero_intro_grandma.png  # optional visual reference
copy_source: inline         # inline | external-file | CMS
---
```

Add the YAML fence **only if you need** structured data — otherwise a simple table row is fine.

---

## 🛠 Funnel Artifacts

| ID                       | Type    | Description                                     |
| ------------------------ | ------- | ----------------------------------------------- |
| **funnel\_intro\_mat**   | page    | Story‑driven landing page (desk‑mat hero offer) |
| **hero\_intro\_grandma** | section | Personal story block that hooks the visitor     |
| **cta\_get\_mat**        | button  | CTA: “Get the Mat”                              |
| **confirmation\_shared** | page    | Unified thank‑you page for funnel **and** store |
| **joke\_teaser\_card**   | block   | Post‑purchase joke/upsell suggestion            |
| **footer\_unified\_v1**  | footer  | Shared footer block (see below)                 |

---

## 🛍 Site + Store Artifacts

| ID                           | Type    | Description                            |
| ---------------------------- | ------- | -------------------------------------- |
| **home\_main**               | page    | Website homepage (Hero Theme)          |
| **storefront\_main**         | page    | Store landing page                     |
| **cta\_explore\_gear**       | button  | “Explore Gear” CTA                     |
| **featured\_gear\_row**      | section | Product highlights (hoodie, mat, case) |
| **announcement\_banner\_v1** | banner  | Site‑wide promo / countdown banner     |

---

## 📚 Learning Center Artifacts

| ID                        | Type    | Description                         |
| ------------------------- | ------- | ----------------------------------- |
| **course\_home**          | page    | Course / customer center start page |
| **module\_lesson\_grid**  | section | Lesson grid layout                  |
| **cta\_continue\_course** | button  | CTA for enrolled learners           |

---

## 😂 Joke & Viral Artifacts

| ID                      | Type       | Description                            |
| ----------------------- | ---------- | -------------------------------------- |
| **jokes\_laugh\_lasso** | collection | Joke product gallery                   |
| **joke\_card\_001**     | card       | Visual joke: “Sir, this is not a scam” |

---

## 📱 Social Media Assets

| ID                     | Type  | Description                  |
| ---------------------- | ----- | ---------------------------- |
| **fb\_cover\_image**   | image | Facebook cover collage       |
| **fb\_profile\_pic**   | image | Profile avatar (cowgirl)     |
| **fb\_intro\_post\_1** | post  | “Welcome to Scam Hunters HQ” |
| **fb\_tip\_post\_217** | post  | Scam Defense Tip #217        |
| **fb\_welcome\_post**  | post  | Mission‑focused intro post   |

---

## 🧱 Reusable Components

| ID                      | Type   | Description                            |
| ----------------------- | ------ | -------------------------------------- |
| **footer\_unified\_v1** | footer | Shared footer (logo, links, copyright) |
| **header\_logo\_slim**  | image  | Slim cowgirl logo (SVG)                |
| **cta\_join\_posse**    | button | Email signup / join CTA                |

---

## 🧭 Planned / Coming Soon

| Planned ID             | Type  | Placeholder                  |
| ---------------------- | ----- | ---------------------------- |
| **yt\_intro\_video**   | video | YouTube explainer (to embed) |
| **ig\_reel\_1**        | reel  | Instagram reel teaser        |
| **tiktok\_scambuster** | short | TikTok viral short           |

---

### How to Add or Edit Artifacts

1. **Create** a new block in this file — use table row **or** YAML header.
2. **Reference** the ID in `journey_map.md` and Mermaid diagram.
3. **Commit** to Git with a clear message:

   ```bash
   git add docs/artifact_index.md
   git commit -m "Add artifact: cta_join_posse + metadata"
   git push
   ```

This index is the single source of truth for content coordination across developers, designers, and AI assistants.
