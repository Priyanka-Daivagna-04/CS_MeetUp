import React from "react";
import { Link } from "react-router-dom";

import csLogo from "../assets/CS.png";
import nisbLogo from "../assets/NISB.png";

export default function Header() {
  return (
    <header className="bg-black text-white shadow-xl py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        {/* LEFT LOGO + TITLE */}
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full overflow-hidden shadow-lg">
            <img
              src={csLogo}
              alt="CS Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-3xl font-bold neon-title">Computer Society</h1>
        </div>

        {/* NAV + RIGHT LOGO */}
        <nav className="flex items-center gap-6 text-lg">
          <Link className="hover:text-pink-400 transition" to="/">
            Home
          </Link>
          <Link className="hover:text-purple-400 transition" to="/meetups">
            Meetups
          </Link>

          <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg">
            <img
              src={nisbLogo}
              alt="NISB Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </nav>
      </div>
    </header>
  );
}
