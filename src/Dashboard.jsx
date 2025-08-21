import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./components/Footer";

export default function Dashboard() {
  const navigate = useNavigate();
  const [parentData, setParentData] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("parentData");
    if (stored) {
      const parsed = JSON.parse(stored);
      const now = Date.now();
      // Auto-logout after 5 minutes
      if (now - parsed.loginTime > 5 * 60 * 1000) {
        localStorage.removeItem("parentData");
        navigate("/login");
      } else {
        setParentData(parsed);
      }
    } else {
      navigate("/login");
    }
  }, [navigate]);

  if (!parentData) {
    return null; // or loading spinner
  }

  return (
    <div className="flex flex-col min-h-screen justify-between bg-gray-50">
      <main className="flex flex-1 items-center justify-center p-4">
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl">
          <h2 className="text-xl font-bold text-center mb-4 text-blue-700">
            Welcome, {parentData.parentId}
          </h2>
          <p className="text-center mb-4">Your attendance & receipts folder:</p>
          <div className="flex justify-center">
            <iframe
              src={parentData.folderLink}
              width="100%"
              height="400"
              style={{ border: "none" }}
              title="Google Drive Folder"
            ></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
