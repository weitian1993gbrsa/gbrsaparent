import React, { useState } from "react";
import Footer from "./components/Footer";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [parentId, setParentId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Example fetch from Google Sheets API
      const res = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${import.meta.env.VITE_PARENT_SHEET_ID}/values/ParentAccess!A:C?key=${import.meta.env.VITE_SHEETS_API_KEY}`
      );
      const data = await res.json();
      const rows = data.values || [];

      // Find matching parent row [ParentID, Password, FolderLink]
      const match = rows.find((row) => row[0] === parentId && row[1] === password);

      if (match) {
        const folderLink = match[2];
        const parentData = { parentId, folderLink, loginTime: Date.now() };
        localStorage.setItem("parentData", JSON.stringify(parentData));
        navigate("/dashboard");
      } else {
        setError("Invalid ID or Password");
      }
    } catch (err) {
      setError("Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <img src="/icons/icon-192.png" alt="GBRSA Logo" className="login-logo" />
        <h1>Attendance & Receipt Portal</h1>
        <p>Login to see your child’s attendance & receipt file.</p>
      </header>

      {loading ? (
        <div className="loading-screen">
          <div className="spinner"></div>
          <p>Verifying your credentials…</p>
        </div>
      ) : (
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter ID"
            value={parentId}
            onChange={(e) => setParentId(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          {error && <p className="error">{error}</p>}
        </form>
      )}

      <Footer />
    </div>
  );
}
