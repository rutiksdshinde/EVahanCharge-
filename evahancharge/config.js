// Configuration file for API keys and settings
// ⚠️ SECURITY: Do NOT commit real API keys to a public GitHub repo.
// Your previous key was found live in your public repo and has been
// removed from this build — rotate/revoke it immediately in the
// OpenAI and TomTom dashboards, then paste NEW keys below for local use.
//
// For any real deployment, move this to a backend/serverless function
// or environment variable so keys are never shipped to the browser.
const CONFIG = {
    OPENAI_API_KEY: 'YOUR_OPENAI_API_KEY_HERE', // https://platform.openai.com/api-keys
    TOMTOM_API_KEY: '', 
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    window.CONFIG = CONFIG;
}
