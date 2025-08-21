import React from "react";
import logo from "../public/icons/icon-192.png";

function Dashboard({ user, setUser }) {
  return (
    <div>
      <img src={logo} alt="GBRSA Logo" className="logo" />
      <h2>Welcome, {user.id}</h2>

      {user.link ? (
        <div className="card">
          <a href={user.link} target="_blank" rel="noopener noreferrer">
            📂 Open Your Attendance & Receipt File
          </a>
        </div>
      ) : (
        <p>No file found for this account.</p>
      )}

      <button onClick={() => setUser(null)}>Logout</button>

      <div className="footer">
        © 2025 GBRSA — GB Rope Skipping Academy
      </div>
    </div>
  );
}

export default Dashboard;