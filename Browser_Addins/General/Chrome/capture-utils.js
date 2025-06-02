// capture-utils.js

/**
 *  Returns a data:URL for any string (HTML or JSON or plaintext).
 *  Example: dataUrl("foo", "text/plain") → "data:text/plain;charset=utf-8,foo"
 */
export function dataUrl(str, mime) {
  return "data:" + mime + ";charset=utf-8," + encodeURIComponent(str);
}

/**
 *  Build a filename-safe base from a URL.
 *  Example: toFilename("https://www.my-site.com/foo/bar") → "Capture_www.my-site.com_2025-05-31T12-34-56-789Z"
 */
export function toFilename(u) {
  const h = new URL(u).hostname.replace(/[^a-z0-9.-]/gi, "_");
  const ts = new Date().toISOString().replace(/[:.]/g, "-");
  return `Capture_${h}_${ts}`;
}
