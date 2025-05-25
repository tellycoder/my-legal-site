// src/app/zoom/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function ZoomPage() {
  // === Compute this month’s password (MMYYYY) ===
  const now = new Date();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const yyyy = now.getFullYear();
  const correctPassword = `${mm}${yyyy}`; // e.g. "052025"

  // === Password state ===
  const [entered, setEntered] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [error, setError] = useState("");

  // === Meeting state ===
  const [startTime, setStartTime] = useState("");
  const [duration, setDuration] = useState(60);
  const [joinUrl, setJoinUrl] = useState<string | null>(null);

  // Handle password submission
  const handlePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (entered === correctPassword) {
      setAuthorized(true);
      setError("");
    } else {
      setError("Incorrect password");
    }
  };

  // Handle Zoom meeting creation
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/create-zoom-meeting", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        startTime: new Date(startTime).toISOString(),
        duration,
      }),
    });
    const json = await res.json();
    if (res.ok) {
      setJoinUrl(json.join_url);
    } else {
      alert("Error: " + (json.message || JSON.stringify(json)));
    }
  };

  // === Render ===
  if (!authorized) {
    return (
      <div className="max-w-md mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Enter Monthly Password
        </h1>
        <form onSubmit={handlePassword} className="space-y-4">
          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              value={entered}
              onChange={(e) => setEntered(e.target.value)}
              required
              className="w-full border px-3 py-2 rounded"
              placeholder="MMYYYY"
            />
            {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
          </div>
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
          >
            Unlock
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-4">Zoom Consultation Portal</h1>
      {joinUrl ? (
        <div className="bg-green-100 p-6 rounded-md">
          <p className="mb-4">Your meeting is scheduled!</p>
          <a
            href={joinUrl}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            Click here to join your meeting
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Date & Time</label>
            <input
              type="datetime-local"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Duration (minutes)</label>
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              min={15}
              max={120}
              className="w-24 border px-3 py-2 rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
          >
            Book Consultation
          </button>
        </form>
      )}
      <div className="mt-6 text-center">
        <Link href="/" className="text-sm text-gray-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}