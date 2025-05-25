// src/app/zoom/page.tsx
"use client";

import { useState } from "react";

export default function ZoomPage() {
  // Compute MMYYYY password
  const now = new Date();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const yyyy = now.getFullYear();
  const correctPassword = `${mm}${yyyy}`; // e.g. "052025"

  // Replace this with your static Zoom meeting link:
  const ZOOM_STATIC_LINK = "https://zoom.us/j/1234567890";

  // State
  const [entered, setEntered] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [error, setError] = useState("");

  const handlePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (entered === correctPassword) {
      setAuthorized(true);
      setError("");
    } else {
      setError("Incorrect password");
    }
  };

  if (!authorized) {
    return (
      <div className="max-w-md mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-4 text-center">Enter password</h1>
        <form onSubmit={handlePassword} className="space-y-4">
          <div>
            <input
              type="password"
              value={entered}
              onChange={e => setEntered(e.target.value)}
              required
              className="w-full border px-3 py-2 rounded"
              placeholder="Password"
            />
            {error && (
              <p className="text-red-600 text-sm mt-1">{error}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
          >
            Unlock
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-2xl font-bold mb-6">Zoom Consultation Portal</h1>
      <a
        href={ZOOM_STATIC_LINK}
        target="_blank"
        rel="noreferrer"
        className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition"
      >
        Meet Us on Zoom
      </a>
    </div>
  );
}