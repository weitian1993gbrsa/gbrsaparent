import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [parentData, setParentData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("parentData");
    if (saved) {
      const parsed = JSON.parse(saved);
      // Check for auto-logout after 5 minutes
      if (Date.now() - parsed.loginTime > 5 * 60 * 1000) {
        localStorage.clear();
        navigate("/login");
      } else {
        setParentData(parsed);
      }
    } else {
      navigate("/login");
    }
  }, [navigate]);

  if (!parentData) return null;

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <img src="/icons/icon-192.png" alt="GBRSA Logo" className="dashboard-logo" />
        <h1>Welcome, Parent {parentData.parentId}</h1>
      </header>

      <div className="card">
        <h2>Your Attendance & Receipt Folder</h2>
        <iframe
          src={parentData.folderLink}
          className="drive-frame"
          title="Parent Folder"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
}
