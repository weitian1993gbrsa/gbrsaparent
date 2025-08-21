import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Login from "./Login";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="app">
      <h1>Attendance & Receipt Portal</h1>
      {user ? (
        <Dashboard user={user} setUser={setUser} />
      ) : (
        <Login onLogin={(u) => setUser(u)} />
      )}
    </div>
  );
}

export default App;