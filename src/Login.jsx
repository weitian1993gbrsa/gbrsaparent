import React, { useState } from "react";
import logo from "../public/icons/icon-192.png";

// Google Apps Script URL
const API_URL = "https://script.google.com/macros/s/AKfycbw0DYAFtQwN_LcWydmaOF40IdjLFznmqQPA2frVT6_HEin-3NJBenWFtagEfAh0v45uPQ/exec";

function Login({ onLogin }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch(API_URL);
      const users = await res.json();

      const match = users.find(
        (u) => u.id === id && u.password === password
      );

      if (match) {
        onLogin(match);
      } else {
        setError("Invalid ID or Password");
      }
    } catch (err) {
      setError("Error fetching user data");
    }
  };

  return (
    <div>
      <img src={logo} alt="GBRSA Logo" className="logo" />
      <p>Please login to see your child’s attendance & receipt file.</p>
      <input
        type="text"
        placeholder="Enter ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Login;