# Legal Framework: Active Defense & Intelligence

**Status:** Draft / Research Only
**Purpose:** To define the legal boundaries of self-hosted "Deception" and "Monitoring" tools within the iScamHunter ecosystem.

> **CRITICAL:** iScamHunter provides defensive tools, not offensive weapons. We operate strictly within the legal frameworks of "Research" and "Network Defense."

---

## 1. The Core Legal Principles

### A. No Entrapment
*   **Principle:** We do not induce crime. We only provide passive targets for attackers who are *already* seeking to commit fraud.
*   **Implementation:** Our tools (like the "Analyst Sandbox" or "Canary Tokens") never advertise vulnerability or actively lure scammers. They simply exist to log uninvited interaction.

### B. Privacy & Consent (The "Wiretap" Line)
*   **Principle:** We do not record 3rd party communications without consent, and we do not collect PII (Personally Identifiable Information) of innocent parties.
*   **Implementation:**
    *   **Call Defender:** Requires explicit "Two-Party" consent warnings.
    *   **Honeypots:** Must display "SECURITY RESEARCH SYSTEM" banners to imply consent-by-proceeding for attackers.
    *   **Data Retention:** Logs are anonymized (IP truncation) after 30 days.

### C. No "Hack Back"
*   **Principle:** We do not use our tools to damage, infiltrate, or DDoS scammer infrastructure.
*   **Implementation:** All "counter-measures" are strictly passive (blocking, logging, reporting).

---

## 2. Safe Usage Guidelines (The "Pre-Flight" Check)

Before deploying any "Active Defense" container, the user must acknowledge:

1.  **Jurisdiction Check:** "I confirm I am aware of my local laws regarding network monitoring and wiretapping."
2.  **No Vigilantism:** "I will not use this data to harass or 'dox' individuals."
3.  **Research Only:** "I am using this tool to gather intelligence for the protection of my network/community."

---

## 3. The "Honeypot" Protocol (Research Mode)

If a user deploys a "Canary" or "Decoy" system, it must follow these rules:
*   **Warning Banner:** Mandatory HTML/SSH banner stating: *"SECURITY RESEARCH SYSTEM. MONITORED ACCESS ONLY."*
*   **Isolation:** Must run in a designated Docker network with NO access to the host LAN.
*   **Automated Reporting:** Data sent to "The Lab" is stripped of PII automatically before upload.

---

*Disclaimer: This document is for educational purposes and does not constitute legal advice. Users should consult their own counsel.*
