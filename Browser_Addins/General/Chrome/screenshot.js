// ───────────────────────────────────────────────────────────────────────────
// Browser_Addins/General/Chrome/screenshot.js
// ───────────────────────────────────────────────────────────────────────────

// ─── CONSTANTS ──────────────────────────────────────────────────────────────

// Minimum delay between two captureVisibleTab calls (in milliseconds)
const MIN_INTERVAL_MS = 500;  

// ─── UTILITY FUNCTIONS ───────────────────────────────────────────────────────

/**
 * delay(ms)
 * Returns a Promise that resolves after `ms` milliseconds.
 * Used to throttle captureVisibleTab calls.
 */
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * blobToDataUrl(blob)
 *
 * Converts a Blob into a base64‐encoded Data URL by using a FileReader.
 * Returns a Promise that resolves to the Data URL string.
 */
function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = (err) => {
      reject(err);
    };
    reader.readAsDataURL(blob);
  });
}

/**
 * dataUrlToBitmap(dataUrl)
 *
 * In MV3 service workers, the `Image` constructor is not available,
 * so we fetch the dataUrl, convert it into a Blob, and then call createImageBitmap(blob).
 * Returns a Promise<ImageBitmap>.
 */
async function dataUrlToBitmap(dataUrl) {
  try {
    const response = await fetch(dataUrl);
    const blob = await response.blob();
    return await createImageBitmap(blob);
  } catch (err) {
    console.error('[E] dataUrlToBitmap failed:', err);
    throw err;
  }
}

// ─── FULL-PAGE CAPTURE FUNCTION ───────────────────────────────────────────────

/**
 * fullPageCapture(tab, baseName, { saveTiles, imgType })
 *
 *   - tab      : chrome.tabs.Tab object (the active tab).
 *   - baseName : string, the “base” filename (no extension). E.g. "Capture_example.com_2025-06-02T12-34-56".
 *   - saveTiles: boolean; if true, each “tile” image is downloaded separately.
 *   - imgType  : string; either "png" or "jpeg" (etc.), used for both captureVisibleTab and convertToBlob.
 *
 * This function:
 *   1. Sends a GET_DIMENSIONS message to find total page height & viewport height.
 *   2. Loops, scrolling by viewportHeight each time, and capturing the visible area.
 *   3. Optionally downloads each tile image separately.
 *   4. Stitches all the ImageBitmaps into one tall OffscreenCanvas, converts that to a Blob,
 *      turns the Blob into a Data URL, and triggers a single “_full.png” download.
 */
async function fullPageCapture(tab, baseName, { saveTiles, imgType }) {
  let lastCaptureTime = 0;
  let dimensions;

  // 1) Ask the content script for page dimensions
  try {
    dimensions = await chrome.tabs.sendMessage(tab.id, { type: 'GET_DIMENSIONS' });
  } catch (err) {
    console.error('[E] fullPageCapture: could not GET_DIMENSIONS:', err);
    return;
  }

  const totalHeight = dimensions.totalHeight;       // e.g. document.documentElement.scrollHeight
  const viewportHeight = dimensions.viewportHeight; // e.g. window.innerHeight
  const dpr = dimensions.devicePixelRatio || 1;     // devicePixelRatio

  let scrollY = 0;
  const shots = [];   // will hold { dataUrl, y } for each capture step

  // 2) Scroll-and-capture loop
  while (scrollY < totalHeight) {
    // Enforce throttle so we don't hit Chrome’s CAPTURE_VISIBLE_TAB limit
    const now = Date.now();
    if (now - lastCaptureTime < MIN_INTERVAL_MS) {
      await delay(MIN_INTERVAL_MS - (now - lastCaptureTime));
    }
    lastCaptureTime = Date.now();

    // Send a message to scroll the page
    await chrome.tabs.sendMessage(tab.id, { type: 'SCROLL_TO', y: scrollY });
    // Give the page a moment to settle
    await delay(150);

    // Capture the visible viewport as a Data URL
    const dataUrl_ = await new Promise((resolve) => {
      chrome.tabs.captureVisibleTab(tab.windowId, { format: imgType }, (url) => {
        resolve(url);
      });
    });

    if (!dataUrl_) {
      console.error('[E] fullPageCapture: captureVisibleTab returned null/undefined');
      break;
    }

    shots.push({ dataUrl: dataUrl_, y: scrollY });
    scrollY += viewportHeight;
  }

  // If no tiles were captured, bail out
  if (shots.length === 0) {
    console.warn('[W] fullPageCapture: no viewport captures succeeded.');
    return;
  }

  // 3) Save each tile individually (if requested)
  if (saveTiles) {
    for (let i = 0; i < shots.length; i++) {
      const s = shots[i];
      const tileFilename = `${baseName}_tile_${String(i).padStart(3, '0')}.${imgType}`;
      chrome.downloads.download({
        url: s.dataUrl,
        filename: tileFilename
      });
    }
  }

  // 4) Stitch all ImageBitmaps into a single tall canvas
  try {
    // Convert each dataUrl → ImageBitmap
    const bitmaps = await Promise.all(
      shots.map((s) => dataUrlToBitmap(s.dataUrl))
    );

    const canvasWidth = bitmaps[0].width;
    const canvasHeight = Math.ceil(totalHeight * dpr);
    const offscreen = new OffscreenCanvas(canvasWidth, canvasHeight);
    const ctx = offscreen.getContext('2d');

    // Draw each bitmap at the correct Y position
    for (let i = 0; i < bitmaps.length; i++) {
      const bmp = bitmaps[i];
      const drawY = shots[i].y * dpr;
      ctx.drawImage(bmp, 0, drawY);
    }

    // Convert the stitched OffscreenCanvas to a Blob
    const stitchedBlob = await offscreen.convertToBlob({ type: `image/${imgType}` });
    // Turn that Blob into a Data URL
    const stitchedDataUrl = await blobToDataUrl(stitchedBlob);

    // Finally, download the stitched version as one file
    const stitchedFilename = `${baseName}_full.${imgType}`;
    chrome.downloads.download({
      url: stitchedDataUrl,
      filename: stitchedFilename
    });

  } catch (err) {
    console.error('[E] fullPageCapture failed to stitch:', err);
    throw new Error(`fullPageCapture: stitching error: ${err.message}`);
  }
}

// ─── EXPORTS FOR MV3 IMPORT ───────────────────────────────────────────────────

export { fullPageCapture, dataUrlToBitmap };
