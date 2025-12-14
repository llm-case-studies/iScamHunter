# iScamHunter: Product Strategy & RFC

**Current State:** v1.0 "The Armory" is Live.

## 1. Project Context
**iScamHunter** is an open-source platform empowering users to disrupt scammers. We don't just block; we bite back.
*   **Vibe:** Cyberpunk / Vigilante / Tactical.
*   **Stack:** Next.js 16 (React 19), Prisma (SQLite), Stripe Embedded Checkout.

## 2. What We Have Built (The "Toy Box")
We have successfully deployed **"The Armory" (/products)**, a commerce engine supporting:
1.  **Physical Gear:** Hoodies, Desk Mats (Dropshipped via Zendrop).
2.  **Manual Hardware:** "Scam Hunter Node" (OrangePi 5+), verified and shipped from HQ.
3.  **Digital/Configurable Goods:** "Hunt-in-a-Box (Docker Edition)".
    *   *Features:* Users can toggle add-ons (vLLM, Admin Dash, Joke Feed).
    *   *Tech:* Dynamic pricing updates, add-ons passed as separate line items to Stripe.

## 3. The Product Roadmap (The "Wishlist")
We want to expand from "selling things" to "selling capabilities".

### A. The "Interceptor" Service
*   **Concept:** A cloud-hosted version of the Hunter Node.
*   **Offer:** Users pay a monthly sub to spin up a "Honey Pot" phone number or email.
*   **AI Agent:** An AI that picks up the phone and wastes the scammer's time (Infinite Loop).

### B. "Scam-as-a-Service" (The Trap)
*   **Concept:** Deploy fake bank login pages (that look like *Scammer* phishing kits) to harvest *Scammer* IPs when they try to hack them.
*   **Legal:** "The Reverse Phish" (Need valid legal framing).

### C. Community Bounties
*   **Concept:** Gamified "Scam Busting". Users upload proof of wasted time.
*   **Reward:** "ScamCoins" (Store Credit) to buy gear from The Armory.

## 4. Next Steps
Prepare for "AI Council" review using the prompts in `AI_FEEDBACK_PROMPTS.md`.
