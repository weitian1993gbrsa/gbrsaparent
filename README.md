# Parent Portal

A simple login portal for parents to access their Google Drive folder (attendance & payment records).

## 🚀 Deployment Instructions

1. Upload this repo to **GitHub**.
2. Connect the repo to **Netlify** and deploy.
   - Build Command: (leave empty)
   - Publish Directory: `.` (root)
3. Ensure `index.html` is at the root of the repo (it is already here).

## ⚠️ Common Issues

- **Blank Page on Netlify**  
  Make sure Netlify is publishing from the root folder where `index.html` is located.

- **CORS Error with Google Apps Script**  
  Google Apps Script sometimes blocks requests from Netlify because of cross-site restrictions.  
  If you see this error in browser console, deploy your script as **Web App → Accessible by Anyone**.

- **Login Fails**  
  Double-check your Google Sheet (UserID, Password, DriveLink).
