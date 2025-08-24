import React from "react";

function Dashboard({ user, setUser }) {
  return (
    <div>
      <h2>Welcome, {user.id}</h2>
      {user.link ? (
        <p>
          <a href={user.link} target="_blank" rel="noopener noreferrer">
            📂 Open Your Attendance & Receipt File
          </a>
        </p>
      ) : (
        <p>No file found for this account.</p>
      )}
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
}

export default Dashboard;