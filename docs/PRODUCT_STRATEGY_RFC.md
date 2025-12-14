# iScamHunter: Product Strategy & RFC (Revised)

**Current State:** v1.1 "Civil Defense"

## 1. Project Context (The Correction)
**iScamHunter** is a platform for **Community Protection and Civil Defense**.
*   **Misconception:** We are NOT a "hack-back" or "scambaiting" vigilante group. We do not harass, DDoS, or illegally interact with scammers.
*   **True Essence:** We are "The Shield". We use technology to **detect, document, and defend**.
*   **Vibe:** Professional / Institutional / High-Tech (Think "CDC for Digital Viruses", not "Mr. Robot").

## 2. What We Have Built (The Foundation)
*   **The Armory:** A marketplace for *defensive* gear (Hoodies = Awareness, Hardware = Protection).
*   **The Academy:** Educational "Skill Trees" to inoculate users against social engineering.
*   **The Lab:** A graph-based library of known scam patterns.

## 3. The Product Roadmap (Reformulated)

We are moving from "selling things" to **"empowering defense"**.

### A. "The Interceptor" (Clarified)
*   **Old Concept:** Buying a phone line to annoy scammers. (❌ Rejected: Too aggressive/risky)
*   **New Concept:** **The Pattern Interceptor (UI)**
    *   *What it is:* The "Active Signal" middleware we built. It interrupts a user's linear journey (e.g., checkout) to offer a "Fork":
        *   "Buying for yourself?" -> Continue.
        *   "Buying for a victim?" -> Pause -> **Deploy 'Care Package' Logic**.
    *   *Value:* It turns commerce into an intervention.

### B. "The Analyst Sandbox" (Was 'Scam-as-a-Service')
*   **Old Concept:** Hosting fake banks. (❌ Rejected: Illegal/Dangerous)
*   **New Concept:** **Clean Room Environment**
    *   *What it is:* A cloud-hosted, disposable browser session (Dockerized) that allows researchers to safely visit and screenshot scam sites without exposing their own IP/Device.
    *   *Goal:* Safe data collection and screenshot automation for the "Scam Library".

### C. "The Early Warning System" (Crowd Intel)
*   **Concept:** Community-driven reporting.
*   **Mechanism:** "I saw this URL." -> We analyze -> We push update to "Hunter Nodes" (OPI5).
*   **Hardware Role:** The OrangePi 5 isn't for attacking; it's a **Home Guard**. It runs local DNS filtering to block newly reported domains for the user's family.

## 4. Next Steps
*   **Design:** Update branding to reflect "Protection/Professionalism" (Less neon-hacker, more "Blue Team" cyber-defense).
*   **Tech:** Focus on the "Analyst Sandbox" (safe browsing) as the next major feature.
