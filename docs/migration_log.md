# iScamHunter Migration Log 🏗️

**Concept:** "Migrating Off" ClickFunnels (Legacy) → "Migrating On" Next.js/Research Engine (Modern)

## 01. The Landing Page (Home)
- **Legacy (CF):** Static sales page. Low readiness.
- **Migration Strategy:** Clean-room rebuild using Next.js 16 + Tailwind.
- **Enhancements (The "Migrate On" Value):**
  - Dark Theme & Premium UI.
  - Interactive animations.
  - "Meet our LLM" dynamic component.
- **Status:** ✅ **DONE**
- **Artifacts:** `web/app/page.tsx`

## 02. The Lab (Formerly "Store" & "Blog")
- **Legacy (CF):** Simple e-commerce template ("Scam Hunters Lab").
- **Migration Strategy:** Complete Pivot. Abandoned e-comm model for "Research Engine".
- **Enhancements:**
  - **The Genealogist:** AI tool to match modern scams to historical ancestors.
  - **The Librarian:** Visual timeline of fraud history (300 BC - Present).
  - **Automated Scouting:** Python agent (`scout.py`) ingesting public domain text.
- **Status:** ✅ **PROTOTYPE LIVE** (`/lab`)
- **Next Steps:** Vector Database integration.

## 03. The Checkout (Order Flow)
- **Legacy (CF):** `Copy_of_Order.html`. High-friction, proprietary form.
- **Migration Strategy:** Replace with Stripe (Embedded Checkout).
- **Status:** ✅ **IMPLEMENTED (Pending Keys)**
- **Artifacts:** `web/app/checkout/page.tsx`, `web/app/api/checkout_sessions/route.ts`

## 04. Fulfillment (POD)
- **Legacy (CF):** Manual/Zapier glue?
- **Migration Strategy:** Direct API integration (Printful/Printify).
- **Status:** ⏸️ **PENDING**

## 05. The Agent (Browser Extension)
- **Legacy (Universal Capture):** Generic scraper.
- **Migration Strategy:** Rebrand to "iScamHunter Agent".
- **Status:** ✅ **MIGRATED to `tools/scam-hunter-agent`**
- **Enhancements:** Renamed manifest, added documentation.
