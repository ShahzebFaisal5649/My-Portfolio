// Environment variables loader
const CONFIG = {
    GROQ_API_KEY: process.env.GROQ_API_KEY || "YOUR_GROQ_API_KEY_HERE"
};

// For browser environments, we'll set this from a separate script
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
