// Browser-safe environment config
window.ENV = window.ENV || {};
window.CONFIG = {
  GEMINI_API_KEY: window.ENV.GEMINI_API_KEY || '',
  GROQ_API_KEY:   window.ENV.GROQ_API_KEY   || ''
};
