# Digital Product Concepts: "Civil Defense in a Box"

**Premise:**
Since we cannot run Docker on iPhones, our "Digital Products" are **Self-Hosted Appliances** that users deploy on their own hardware (PC, Mac, OrangePi, NAS) but *control* from their phone.

**The Model:**
"App Store for Self-Defense." We sell the **Configuration**, not just the code.

---

## 1. "The Family Shield" (Network Defense Kit)
*   **The Container:** Pre-configured **AdGuard Home** or **Pi-hole**.
*   **The "iScamHunter" Value Add:**
    *   Pre-loaded with our **Dynamic Blocklist** (updated hourly from "The Lab").
    *   Custom "Family Dashboard" UI (simplified view of blocked threats).
    *   "Panic Button" (Block internet completely).
*   **User Story:** "I installed this on my old laptop, and now my grandma's iPad can't load those fake support sites."

## 2. "The Evidence Locker" (Forensic Preservation)
*   **The Container:** Modified **ArchiveBox** or **SingleFile** server.
*   **The "iScamHunter" Value Add:**
    *   One-click "Snap & seal". User pastes a URL, the container visits it, captures full HTML/Screenshots/WARC, and stamps it with a hash.
    *   Generates a PDF Report formatted for IC3/FBI submission.
*   **User Story:** "I found a scam site. I fed it to the Locker. It generated a zip file I sent to the police."

## 3. "The Safe Vault" (Identity Protection)
*   **The Container:** **Vaultwarden** (Bitwarden) + **Paperless-ngx**.
*   **The "iScamHunter" Value Add:**
    *   "Recovery Kit" Template: Pre-organized folders for Passport, Insurance, Deeds.
    *   "Dead Man's Switch": If you don't check in for 30 days, encrypted access is emailed to your next of kin.
*   **User Story:** "My parents lost their ID in a fire. Thankfully, we had it all in the Safe Vault running on their Mac Mini."

---

## 4. The "iPhone" Problem Strategy
Since iOS can't *run* the container, the generic "iPhone App" is a **Remote Commander**.

*   **Product:** "Hunter Command" (iOS/Android App).
*   **Function:** It discovers the containers running on your local network (using mDNS/Bonjour).
*   **Features:**
    *   **Notification:** "Shield blocked 3 threats today."
    *   **Action:** "Add this URL to the Blocklist."
    *   **Status:** "Safe Vault is Online."

**Analogy:** The iPhone is the Remote; the Docker Container is the Apple TV.
