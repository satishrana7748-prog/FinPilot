import { useState } from "react";

import {
  FaSearch,
  FaBell,
  FaUserCircle,
  FaEllipsisV
} from "react-icons/fa";
function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-3xl shadow-xl px-8 py-5 flex justify-between items-center">
      {/* Left */}

      <div>
        <h1 className="text-3xl font-bold text-slate-800">Welcome Back 👋</h1>

        <p className="text-gray-500 mt-1">{today}</p>
      </div>

      {/* Search */}

      <div className="flex items-center bg-slate-100 hover:bg-slate-200 transition px-5 py-3 rounded-2xl w-[380px]">
        <FaSearch className="text-gray-500" />

        <input
          type="text"
          placeholder="Search Assets..."
          className="bg-transparent outline-none ml-4 w-full"
        />
      </div>

      {/* Right */}

      <div className="flex items-center gap-5 relative">
        <button>
          <FaBell className="text-xl text-gray-600 hover:text-cyan-600 transition" />
        </button>

        <button>
          <FaUserCircle className="text-3xl text-gray-700" />
        </button>

        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="p-2 rounded-lg hover:bg-slate-200 transition"
        >
          <FaEllipsisV />
        </button>

        {openMenu && (
          <div className="absolute right-0 top-14 w-64 bg-white rounded-2xl shadow-2xl border overflow-hidden z-50">
            <button className="w-full text-left px-5 py-4 hover:bg-slate-100">
              📜 AI Decisions
            </button>

            <button className="w-full text-left px-5 py-4 hover:bg-slate-100">
              ⭐ Watchlist
            </button>

            <button className="w-full text-left px-5 py-4 hover:bg-slate-100">
              📊 Portfolio Report
            </button>

            <button className="w-full text-left px-5 py-4 hover:bg-slate-100">
              📄 Export Report
            </button>

            <button className="w-full text-left px-5 py-4 hover:bg-slate-100">
              ⚙ Settings
            </button>

            <button className="w-full text-left px-5 py-4 hover:bg-slate-100">
              ❓ Help
            </button>

            <hr />

            <button className="w-full text-left px-5 py-4 text-red-600 hover:bg-red-50">
              🚪 Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
