import React from "react";
import Footer from "../components/Footer";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <img src="/icons/icon-192.png" alt="GBRSA Logo" className="dashboard-logo" />
        <h1>GBRSA Attendance Dashboard</h1>
      </header>

      {/* Dashboard content goes here */}

      <Footer />
    </div>
  );
}
