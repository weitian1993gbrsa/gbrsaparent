import React, { useEffect, useState } from "react";
import userLinks from "./userLinks.json";

function Dashboard({ user }) {
  const [fileLink, setFileLink] = useState(null);

  useEffect(() => {
    const email = user.email;
    if (userLinks[email]) {
      setFileLink(userLinks[email]);
    }
  }, [user]);

  return (
    <div>
      <h2>Welcome, {user.user_metadata.full_name || user.email}</h2>
      {fileLink ? (
        <p>
          <a href={fileLink} target="_blank" rel="noopener noreferrer">
            📂 Open Your Attendance & Receipt File
          </a>
        </p>
      ) : (
        <p>No file found for this account. Please contact admin.</p>
      )}
      <button onClick={() => window.netlifyIdentity.logout()}>Logout</button>
    </div>
  );
}

export default Dashboard;