# Digital Product Concepts: "Civil Defense in a Box"

**Premise:**
Since we cannot run Docker on iPhones, our "Digital Products" are **Self-Hosted Appliances** that users deploy on their own hardware (PC, Mac, OrangePi, NAS) but *control* from their phone.

**The Model:**
"App Store for Self-Defense." We sell the **Configuration**, not just the code.

---

## 1. User Profiles (Simplicity Layer)
To reduce cognitive load, we bundle containers into **Defense Profiles**:

*   **🛡️ The Family Protector**
    *   *Includes:* Family Shield + Hunter Command.
    *   *Goal:* "Set and forget" network safety for non-technical households.
*   **🔬 The Solo Researcher**
    *   *Includes:* Analyst Sandbox + Evidence Locker.
    *   *Goal:* Safe investigation and foreclosure of scam resources.
*   **🏛️ The Civil Defender**
    *   *Includes:* Neighborhood Watch + The Scout.
    *   *Goal:* Community-level resilience and reporting.

---

## 2. "The Family Shield" (Network Defense Kit)
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

---

## 5. Future Concepts (Requires Legal Review)

### "The Call Defender" (Voice Evidence Kit)
*   **The Container:** Modified VoIP Server (Asterisk).
*   **Function:**
    *   One-tap "Record this call" trigger from the Hunter Command app.
    *   Auto-transcribes and highlights "Scam Script Keywords" (e.g., "AnyDesk", "Refund").
*   **Legal Safety:** **STRICT "One-Party" vs "Two-Party" Consent mode.** App must strictly warn user about local wiretap laws before enabling.
*   **User Story:** "Verify if this recording matches known scam scripts in The Lab."

### "The Analyst Sandbox" (Safe Browsing)
*   **The Container:** Browser-in-a-Box (Kasm / Neko).
*   **Function:**
    *   Disposable browsing environment. User opens a link -> Container renders it -> User sees video stream only.
    *   Zero risk of malware infection on the main device.
*   **User Story:** "I want to see what this shady link does, but I'm scared to click it. I'll open it in the Sandbox."

### "The Neighborhood Watch" (Community Radar)
*   **The Container:** P2P Threat Sharing Node (Gossip Protocol).
*   **Function:**
    *   Anonymized local network monitoring.
    *   Shares "Blocked Domain" hits with trusted neighbors/verified users.
    *   Visualizes the local threat landscape (e.g., "3 phishing attempts in your building today").
*   **User Story:** "Our condo board runs a node. We spotted a fake maintenance portal targeting residents before anyone clicked."

### "The Time Capsule" (Digital Estate)
*   **The Container:** Encrypted Cold Storage + Dead Man's Switch.
*   **Function:**
    *   Periodically creates encrypted backups of critical docs (Passports, Deeds).
    *   Distributes shards to trusted contacts or cloud locations.
    *   "Emergency Access" instructions sent to next-of-kin if user is inactive for 30 days.
*   **User Story:** "After my dad passed, this gave us access to his accounts without probate court."

### "The Scout" (Proactive Threat Hunter)
*   **The Container:** Automated Scanner.
*   **Function:**
    *   Checks visited URLs against 12+ threat databases (The Lab, VirusTotal) in real-time.
    *   Provides a "Safety Score" overlay.
*   **User Story:** "Before I buy that 'discount' iPad, The Scout warns me the domain was registered yesterday."

---

## 6. Legal & Safety (The "Pre-Flight" Check)
All active defense tools are governed by our **Legal Framework (`docs/LEGAL_HONEYPOT_FRAMEWORK.md`)**.
Users must accept the "Civil Defense Oath":
1.  **Defense Only:** No offensive actions.
2.  **Privacy:** Respect local wiretap/monitoring laws.
3.  **Research:** Data is for protection and intelligence gathering.

## 7. Deployment Strategy
*   **Phase 1:** "Family Shield" (Immediate Protection).
*   **Phase 2:** "Evidence Locker" & "Analyst Sandbox" (Tools for Hunters).
*   **Phase 3:** "Neighborhood Watch" & "Time Capsule" (Community Resilience).
