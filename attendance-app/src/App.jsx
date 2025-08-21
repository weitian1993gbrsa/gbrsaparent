import React, { useEffect, useState } from "react";
import netlifyIdentity from "netlify-identity-widget";
import Dashboard from "./Dashboard";
import Login from "./Login";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    netlifyIdentity.init();
    netlifyIdentity.on("login", (user) => {
      setUser(user);
      netlifyIdentity.close();
    });
    netlifyIdentity.on("logout", () => setUser(null));
  }, []);

  return (
    <div className="app">
      <h1>Attendance & Receipt Portal</h1>
      {user ? (
        <Dashboard user={user} />
      ) : (
        <Login onLogin={() => netlifyIdentity.open()} />
      )}
    </div>
  );
}

export default App;