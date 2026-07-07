import { useState, useEffect, useRef } from "react";
import { FaBell, FaSearch, FaEllipsisV } from "react-icons/fa";
import { Link } from "react-router-dom";
(darkMode,
  setDarkMode,
  function Navbar({ searchTerm, setSearchTerm, darkMode, setDarkMode }) {
    const [showNotifications, setShowNotifications] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const [profileImage, setProfileImage] = useState(
      localStorage.getItem("profileImage") ||
        "https://i.pravatar.cc/150?img=12",
    );

    const notificationRef = useRef(null);
    const menuRef = useRef(null);

    const today = new Date().toLocaleDateString("en-IN", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    const notifications = [
      {
        title: "Bitcoin increased by 4.8%",
        time: "2 min ago",
      },
      {
        title: "Gold showing Bullish Trend",
        time: "15 min ago",
      },
      {
        title: "AI Recommendation Generated",
        time: "30 min ago",
      },
      {
        title: "Portfolio Updated Successfully",
        time: "1 hour ago",
      },
    ];

    useEffect(() => {
      function handleClickOutside(e) {
        if (
          notificationRef.current &&
          !notificationRef.current.contains(e.target)
        ) {
          setShowNotifications(false);
        }

        if (menuRef.current && !menuRef.current.contains(e.target)) {
          setShowMenu(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);

      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const uploadImage = (e) => {
      const file = e.target.files[0];

      if (!file) return;

      const reader = new FileReader();

      reader.onload = () => {
        setProfileImage(reader.result);
        localStorage.setItem("profileImage", reader.result);
      };

      reader.readAsDataURL(file);
    };

    return (
      <div className="relative z-[9999] bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl px-8 py-5 flex justify-between items-center">
        {/* Left */}

        <div>
          <h1 className="text-3xl font-bold text-slate-800">Welcome Back 👋</h1>

          <p className="text-gray-500 mt-1">{today}</p>
        </div>

        {/* Search */}

        <div className="flex items-center bg-slate-100 hover:bg-slate-200 transition px-5 py-3 rounded-2xl w-[420px]">
          <FaSearch className="text-gray-500" />

          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Assets..."
            className="bg-transparent outline-none ml-4 w-full"
          />
        </div>

        {/* Right */}

        <div className="flex items-center gap-6">
          {/* Notification */}

          <div className="relative" ref={notificationRef}>
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative"
            >
              <FaBell className="text-2xl hover:text-cyan-600 transition" />

              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                {notifications.length}
              </span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-4 w-96 bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden z-[9999]">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-700 text-white px-6 py-4">
                  <h2 className="font-bold">Notifications</h2>
                </div>

                {notifications.map((item, index) => (
                  <div
                    key={index}
                    className="px-6 py-4 border-b hover:bg-slate-50"
                  >
                    <h3 className="font-semibold">{item.title}</h3>

                    <p className="text-sm text-gray-500">{item.time}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-2xl hover:text-cyan-600 transition"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Profile */}

          <div className="flex items-center gap-3">
            <label htmlFor="profile">
              <img
                src={profileImage}
                className="w-14 h-14 rounded-full border-4 border-cyan-500 object-cover cursor-pointer"
              />
            </label>

            <input
              id="profile"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={uploadImage}
            />

            <div>
              <h2 className="font-bold">Satish Rana</h2>

              <p className="text-sm text-gray-500">AI Investment Analyst</p>
            </div>
          </div>

          {/* Three Dot Menu */}

          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="p-3 rounded-xl hover:bg-slate-200 transition"
            >
              <FaEllipsisV />
            </button>

            {showMenu && (
              <div className="absolute right-0 mt-4 w-64 bg-white rounded-2xl shadow-2xl border overflow-hidden z-50">
                <Link
                  to="/ai-decisions"
                  onClick={() => setOpenMenu(false)}
                  className="flex
                items-center
                gap-4
                px-6
                py-5
                hover:bg-cyan-50
                transition-all
                duration-200
                group
                "
                >
                  <div className="text-xl group-hover:scale-110 transition">
                    📜
                  </div>

                  <div>
                    <p className="font-semibold">AI Decisions</p>

                    <p className="text-xs text-gray-500">
                      View AI generated investment signals
                    </p>
                  </div>
                </Link>

                <button className="w-full text-left px-5 py-4 hover:bg-slate-100">
                  ⭐ Watchlist
                </button>

                <button className="w-full text-left px-5 py-4 hover:bg-slate-100">
                  📊 Portfolio Report
                </button>

                <button className="w-full text-left px-5 py-4 hover:bg-slate-100">
                  ⚙ Settings
                </button>

                <button className="w-full text-left px-5 py-4 hover:bg-slate-100">
                  ❓ Help
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  });

export default Navbar;
