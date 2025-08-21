# Attendance & Receipt Portal (GBRSA UI Fixed)

React + Vite app using **Google Sheets** + **Apps Script** for login.  
Deployed on **Netlify**, installable as a **Progressive Web App (PWA)**.  

## Fixes
- Added `base: './'` in `vite.config.js` to prevent blank page issue on Netlify
- Branding applied (GBRSA colors, logo, footer)
- SPA routing handled by `netlify.toml`

## Setup
```bash
npm install
npm run dev
npm run build
```
