# iScamHunter Agent (Browser Extension) 🕵️‍♂️

**"The Wolf Detector"**

This Chrome Extension is the field agent's tool for the iScamHunter movement. It allows researchers to capture evidence, analyze page structures, and (in future versions) automatically detect potential scams.

## Features
- **Capture:** One-click save of Page HTML, Screenshots, and Text.
- **Analyze:** Breaks down page structure (DOM outline).
- **Report:** (Coming Soon) Submit directly to the Global Scam Database.

## Installation (Developer Mode)

1.  Open Chrome and navigate to `chrome://extensions`.
2.  Enable **Developer mode** (toggle in the top right).
3.  Click **Load unpacked**.
4.  Select this directory:
    `/path/to/iScamHunter/tools/scam-hunter-agent`
5.  The **iScamHunter Agent** icon should appear in your toolbar.

## Usage
1.  Navigate to a suspicious website.
2.  Click the extension icon.
3.  Select **"Screenshot"** + **"Text"**.
4.  Click **Start Capture**.
5.  The evidence package will download to your machine.

## Development
- **Manifest V3:** Modern Chrome architecture.
- **Service Worker:** `background.js` handles the capture coordination.
- **Content Scripts:** `capture.js` behaves as the extracted eye on the page.
