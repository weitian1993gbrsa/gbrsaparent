import React from "react";
import Footer from "../components/Footer";

export default function Login() {
  return (
    <div className="login-container">
      <header className="login-header">
        <img src="/icons/icon-192.png" alt="GBRSA Logo" className="login-logo" />
        <h1>Attendance & Receipt Portal</h1>
        <p>Login to see your child’s attendance & receipt file.</p>
      </header>

      <form className="login-form">
        <input type="text" placeholder="Enter ID" />
        <input type="password" placeholder="Enter Password" />
        <button type="submit">Login</button>
      </form>

      <Footer />
    </div>
  );
}
