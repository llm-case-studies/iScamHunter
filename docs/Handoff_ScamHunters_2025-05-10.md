**Scam Hunters Project: Handoff Summary & Implementation Guide**

---

### 🔄 Project Context & Overview

* **Brand Name:** Scam Hunters (trademark filed via USPTO)
* **Mission:** Fight scams with sharp minds, sharp gear, and sharper jokes. The platform mixes education, humor, community, and merch in a lightweight, impactful way.
* **Infrastructure:** Initially deployed using ClickFunnels (CF), Stripe, and Zendrop.

---

### 🔧 Core Systems Setup

#### ✅ What Works Now

* **Facebook Page:** Live with branded visuals and CTA buttons

  * Profile: Cowgirl with Lasso
  * Cover: Gear + Scam Hunters branding
  * Buttons: "Learn More" and "Message"
* **Storefront:** Built in CF

  * Products include desk mat and hoodie
  * Collections: e.g. "Laugh Lasso" for joke products
* **Stripe:** Connected and processing live payments

  * Last confirmed charge: \$99.51 successfully processed
* **Zendrop:** Connected with auto-fulfillment enabled

  * Orders marked as "Paid" and in "Processing" or "Shipped" state
* **Local Git Repo:** Initialized and pushed to local Gitea

  * Location: `/media/alex/Storage/Startups/iScamHunter`
  * Remote: `http://omv-elbo.local:3000/FunGitea/iScamHunter.git`

---

### 🌟 Highlights & Achievements

* Funnel and store launched
* Stripe and Zendrop connected & tested with real transactions
* Visuals created for brand identity and social presence
* Custom confirmation page and Facebook integration near complete
* Experimental joke-as-product pipeline tested

---

### 🔍 Unresolved / Work In Progress

#### ❌ Confirmation Page Routing

* Purchases sometimes redirect to storefront instead of final confirmation screen
* Need to locate and fix CF setting for "After Purchase Step" (not clearly surfaced)

#### ❌ Email Notifications

* Only Stripe emails received
* CF email automations not firing (likely due to missing automation rule or SMTP sender)
* Needs audit in: `Automations -> Post-purchase -> Connected Funnel`

#### ❌ Funnel vs. Store UX

* Funnel leads only to desk mat (entry-level)
* Hoodie accessible via indirect jumps through "Gear" collection
* Intent is to allow direct navigation between funnel and store collections

#### ❌ Product Presentation

* Some joke products do not show in collections despite being added
* Possibly only physical products show in current CF setup

---

### 🏆 Next Steps (Immediate Priority)

1. **Fix Confirmation Page Redirect**

   * Check product step in funnel builder
   * Ensure redirect to `/order-confirmation` page

2. **Fix Email Automation**

   * Add order confirmation email under Automations
   * Ensure SMTP and sender domain are verified

3. **Improve Funnel UX**

   * Add buttons to navigate to store/collections
   * Make hoodie and other gear more accessible

4. **Refactor Storefront**

   * Clarify roles of:

     * Homepage (educational/mission focus)
     * Storefront (merch focus)
     * Funnel (intro offer or viral entry)

5. **Finalize Joke-as-Product Flow**

   * Convert jokes into styled visual cards
   * Auto-post to FB (later phase)

---

### 📂 Folder & Git Structure

**Local Git Repo:**

* Location: `/media/alex/Storage/Startups/iScamHunter`
* Remote: Gitea instance (self-hosted)
* Initialized with project media and structure

**Folder Highlights:**

```
/Startups/iScamHunter
└── Mock-ups/
    ├── Logos (png, svg, xcf)
    ├── Hoodies/ (front/back mockups)
    └── Social/ (FB profile, cover image)
└── Products/
    └── DeskMat.png, Hoodie.xcf, JokeCards/
```

---

### ✨ Future Vision (Larger Scope)

* **Phase 2:**

  * Integrate full-fledged email drip for product buyers & joke contributors
  * Dynamic joke card rendering with HTML/CSS-to-image pipeline
  * AI-assisted joke suggestions and categorization (humor engine)
* **Phase 3:**

  * Migrate off ClickFunnels to custom stack (Flask, FastAPI or Rust SPA + backend)
  * SEO-optimized joke archive + merch + stories

---

### ⚠️ Risks

* CF sandbox/test orders reused order IDs (led to Zendrop mislabeling)
* Store and Funnel disjointed navigation
* Email notifications absent (critical for fulfillment assurance)

---

### ✊ Final Notes

We suggest **starting next chat titled:**

> "Scam Hunters — Funnel + Store Fixes + Email & Confirm Polish"

Start with recent screenshots of funnel builder and automations tab.

Keep this chat available to reference for visual walkthroughs and context backup.

---

**Prepared for handoff by ChatGPT** Date: 2025-05-11 Chat context: \~3K messages including images, tool actions, and confirmations.
