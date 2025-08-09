import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 Props:
 - sections: [{ id, name }]
 - onSelect(id): scroll handler
 - switchTo: { path, label }
 - logo: string (path to logo)
*/
export default function Drawer({ sections = [], onSelect, switchTo, logo }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Fixed top bar with logo + switch + drawer button */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 bg-brand-bg shadow-md h-20">
        {/* Logo container */}
        <div className="flex items-center">
          <div className="w-30 h-12 flex items-center justify-center overflow-hidden rounded">
            <img
              src={logo}
              alt="Hotel Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Switch menu & drawer button */}
        <div className="flex items-center gap-8">
          <Link
            to={switchTo?.path || "/"}
            className="px-3 py-3 rounded-md text-white bg-brand-logo text-sm shadow-sm"
          >
            {switchTo?.label || "Other Menu"}
          </Link>

          <button
            aria-label="Open menu"
            className="p-2 px-4 rounded-md bg-brand-logo text-white shadow"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setOpen(false)}
        />
      )}

      {/* sliding drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-brand-text font-semibold">Menu</h3>
          <button onClick={() => setOpen(false)} aria-label="Close">✖</button>
        </div>

        <nav className="p-4">
          <ul className="space-y-3">
            {sections.map((s) => (
              <li
                key={s.id}
                className="cursor-pointer text-brand-text hover:text-brand-logo"
                onClick={() => {
                  if (onSelect) onSelect(s.id);
                  setOpen(false);
                }}
              >
                {s.name}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
