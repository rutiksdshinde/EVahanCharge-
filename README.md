# EVahanCharge 

A full visual + UX redesign of your EV Station Finder site, rebuilt on a single
shared design system so every page looks and behaves consistently. All original
functionality (station search, route planning, traffic monitor, cost calculator,
chatbot, theme toggle) is preserved and reconnected to the new UI.

## Links
- **Portfolio:** https://rutikshinde.netlify.app
- **LinkedIn:** https://www.linkedin.com/in/rutik-shinde-09a438237
- **GitHub:** https://github.com/rutiksdshinde


## ⚠️ Do this first: rotate your API keys

Your GitHub repo and deployed site had **live API keys committed in the source**:
- An OpenAI key in `config.js`
- A TomTom key in `config.js`, and **also hardcoded separately** inside `ev_routing.js` and `traffic.js`

Anyone who saw your repo or viewed page source could use these at your expense.
This build removes all of them and routes every TomTom call through
`CONFIG.TOMTOM_API_KEY` in `config.js`. Before you deploy:

1. Go to your OpenAI and TomTom dashboards and **revoke/regenerate** those two keys.
2. Paste the new keys into `config.js`.
3. For a real production deploy, keys shouldn't ship to the browser at all —
   proxy them through a small backend/serverless function. Fine to skip for a
   personal/portfolio project, but worth knowing.

## Update round 2

- Renamed the brand consistently to **EVahanCharge** everywhere (nav, footer,
  page titles, meta descriptions, emails) — the original repo mixed "EVahan",
  "EVahanCharge", and "EVahansearch" in different places.
- Standardized contact emails to `@evahancharge.com`.
- Added a **Download App** button to the homepage hero, linking to the
  Mobile App page.
- Tightened up responsiveness: the "Find a Charger" pill in the navbar now
  hides below 620px so the mobile nav doesn't get cramped; the floating hero
  cards, map sidebars (station finder / route planner / traffic), and the
  cost calculator all got extra breakpoints for very small phones (≤480px)
  in addition to the existing tablet/mobile breakpoints. Verified with no
  horizontal overflow at 320/375/414/768/1024/1280/1440px on every page.

## What changed

- **New shared design system** (`assets/css/main.css`, `assets/js/site.js`) — one
  consistent dark/light theme, typography, buttons, cards, and animations used
  by all 11 pages instead of each page reinventing its own styles.
- **Fully responsive** — mobile nav menu, stacking layouts, collapsible map
  sidebars, tested at desktop and mobile widths.
- **Real animation** — scroll-reveal on every section, floating hero cards,
  animated stat counters, smooth hover states, animated cost-calculator results.
- **Rebuilt pages**: `index.html` (new landing page), `ev_search.html`,
  `ev_routing.html`, `ev_calculator.html`, `traffic.html`, `about.html`,
  `contact.html`, `careers.html`, `privacy.html`, `terms.html`, `app_benefits.html`.
- **Bug fixes along the way**: script load order for `traffic.js` (it referenced
  `apiKey` before `config.js` had loaded), a duplicated/conflicting inline
  chatbot implementation on `ev_calculator.html` that fought with `chatbot.js`,
  and inconsistent theme-toggle logic per page — all now standardized on
  `theme-toggle.js`.
- All original logic files (`ev_search.js`, `ev_routing.js`, `ev_model.js`,
  `calculateLongDistanceEVRoute.js`, `chargingAvailability.js`, `traffic.js`,
  `chatbot.js`) are untouched apart from the key fix above — your map search,
  routing, and charging-availability logic work exactly as before.

## Running it locally

It's a static site — no build step. Just open `index.html` in a browser, or
serve the folder with any static server:



Note: station search, route planning, and traffic require a valid TomTom key
in `config.js`; the chatbot needs a valid key too (or you can adapt it to a
free/local model).
