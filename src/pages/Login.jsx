import { useState } from "react";
import logo from "../assets/gbrsa-logo.png";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("https://script.google.com/macros/s/AKfycbw0DYAFtQwN_LcWydmaOF40IdjLFznmqQPA2frVT6_HEin-3NJBenWFtagEfAh0v45uPQ/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (data.success && data.folderLink) {
      window.location.href = data.folderLink; // Redirect to Drive folder
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-yellow-200 to-yellow-500 p-4">
      <img src={logo} alt="GBRSA Logo" className="w-32 mb-6" />
      <h1 className="text-2xl font-bold text-blue-800">Parent Portal</h1>
      <p className="mb-6 text-gray-700">GB Rope Skipping Academy</p>

      <form onSubmit={handleLogin} className="bg-white p-6 rounded-2xl shadow-md w-full max-w-sm">
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 mb-3 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-3 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}
