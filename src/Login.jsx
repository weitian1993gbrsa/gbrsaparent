import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./components/Footer";

export default function Login() {
  const [parentId, setParentId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbw0DYAFtQwN_LcWydmaOF40IdjLFznmqQPA2frVT6_HEin-3NJBenWFtagEfAh0v45uPQ/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ parentId, password }),
        }
      );

      const data = await res.json();

      if (data.success) {
        const parentData = {
          parentId,
          folderLink: data.folderLink,
          loginTime: Date.now(),
        };
        localStorage.setItem("parentData", JSON.stringify(parentData));
        navigate("/dashboard");
      } else {
        setError("Invalid ID or Password");
      }
    } catch (err) {
      setError("Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Attendance & Receipt Portal</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Enter ID"
            value={parentId}
            onChange={(e) => setParentId(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
