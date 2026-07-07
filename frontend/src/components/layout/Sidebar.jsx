import {
  FaChartLine,
  FaWallet,
  FaUser,
  FaBell,
  FaFileAlt,
  FaSignOutAlt,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

function Sidebar({ onLogout }) {

  const menus = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaChartLine />,
    },
    {
      name: "Prediction",
      path: "/prediction",
      icon: <FaChartLine />,
    },
    {
      name: "My Investment",
      path: "/investment",
      icon: <FaWallet />,
    },
    {
      name: "Reports",
      path: "/reports",
      icon: <FaFileAlt />,
    },
    {
      name: "Notifications",
      path: "/notifications",
      icon: <FaBell />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <FaUser />,
    },
  ];

  return (
    <div className="w-72 min-h-screen bg-slate-950 text-white shadow-2xl flex flex-col">

      {/* Logo */}

      <div className="p-8 border-b border-slate-700">

        <h1 className="text-4xl font-extrabold text-cyan-400">

          FinPilot

        </h1>

        <p className="text-gray-400 mt-2">

          AI Investment Platform

        </p>

      </div>

      {/* Menu */}

      <div className="flex-1 mt-8 px-5 space-y-3">

        {menus.map((item) => (

          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                  : "hover:bg-slate-800"
              }`
            }
          >

            {item.icon}

            {item.name}

          </NavLink>

        ))}

      </div>

      {/* Logout */}

      <div className="p-5">

        <button
          onClick={onLogout}
          className="flex items-center justify-center gap-3 w-full bg-red-600 hover:bg-red-700 py-3 rounded-xl transition"
        >

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </div>
  );
}

export default Sidebar;