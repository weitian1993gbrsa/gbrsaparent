# Attendance & Receipt Portal

This project is a React web app deployed on Netlify that uses **Google Sheets** + **Apps Script** as a simple database for login credentials and links.

## 🚀 Setup

1. Install dependencies:
   ```bash
   npm install
   npm run dev
   ```

2. Build for production:
   ```bash
   npm run build
   ```

3. Deploy on Netlify with settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

## 🔑 Google Sheets API
- Store `ID | Password | DriveLink` in your Google Sheet.
- Publish via Apps Script and replace the `API_URL` in `src/Login.jsx`.

