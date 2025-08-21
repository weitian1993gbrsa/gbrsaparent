import { useState } from "react";
import logo from "../assets/gbrsa-logo.png";

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw0DYAFtQwN_LcWydmaOF40IdjLFznmqQPA2frVT6_HEin-3NJBenWFtagEfAh0v45uPQ/exec";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      const url = new URL(APPS_SCRIPT_URL);
      url.searchParams.set("username", username);
      url.searchParams.set("password", password);
      const res = await fetch(url.toString(), { method: "GET" });
      const text = await res.text();
      let data;
      try { data = JSON.parse(text); } catch { throw new Error("Invalid response from server"); }
      if (data.success && data.folderLink) {
        window.location.href = data.folderLink;
      } else {
        alert("Invalid credentials!");
      }
    } catch (err) {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
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
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
