// Browser_Addins/General/Chrome/logger.js
(() => {
  // Define numeric levels
  const LOG_LEVELS = { DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3 };
  // Set your desired minimal level here:
  const CURRENT_LOG_LEVEL = LOG_LEVELS.INFO;

  // Internal helper
  function _should(level) {
    return LOG_LEVELS[level] >= CURRENT_LOG_LEVEL;
  }
  function _fmt(args) {
    return args.map(a =>
      typeof a === 'object' ? JSON.stringify(a) : String(a)
    ).join(' ');
  }

  // Expose logger globally
  const L = {
    debug: (...args) => { if (_should('DEBUG')) console.debug('[D]', _fmt(args)); },
    info:  (...args) => { if (_should('INFO'))  console.info ('[I]', _fmt(args)); },
    warn:  (...args) => { if (_should('WARN'))  console.warn ('[W]', _fmt(args)); },
    error: (...args) => { if (_should('ERROR')) console.error('[E]', _fmt(args)); },
  };

  // Attach to both window (content/popup) and self (service worker)
  if (typeof window !== 'undefined') window.logger = L;
  if (typeof self   !== 'undefined') self.logger   = L;
})();
