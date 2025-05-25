// src/app/page.tsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to George Brown Professional Corporation
        </h1>
        <p className="text-lg text-gray-700">
          We offer reliable, accessible legal support across Ontario.
        </p>
      </main>

      <Footer />
    </div>
  );
}