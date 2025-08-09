import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-brand-bg px-4">
      <img src="/logo.png" alt="Hotel Logo" className="w-36 h-36 mb-4" />
      <h1 className="text-2xl mb-2 text-brand-text font-bold">Welcome to Our Hotel</h1>
      <p className="text-sm mb-6 text-brand-text/90">Tap a menu to view — optimized for mobile</p>

      <div className="w-full max-w-md space-y-5">
        <Link
          to="/restaurant"
          className="block w-full text-center py-6 rounded-xl bg-brand-logo text-white text-xl font-semibold shadow-lg"
        >
          Restaurant Menu
        </Link>

        <Link
          to="/bar"
          className="block w-full text-center py-6 rounded-xl bg-brand-logo text-white text-xl font-semibold shadow-lg"
        >
          Bar Menu
        </Link>
      </div>

      <footer className="mt-10 text-xs text-brand-text/70">
        <span>Open: 08:00 — 23:30</span>
      </footer>
    </div>
  );
}
