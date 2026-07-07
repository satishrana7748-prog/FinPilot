import {
  FaUserCog,
  FaMoon,
  FaBell,
  FaShieldAlt,
  FaDatabase,
  FaSave,
} from "react-icons/fa";

function Settings() {
  return (
    <div className="p-10 bg-slate-100 min-h-screen">

      <div className="flex items-center gap-4 mb-10">

        <FaUserCog className="text-5xl text-cyan-600" />

        <div>

          <h1 className="text-4xl font-bold">
            Settings
          </h1>

          <p className="text-gray-500 mt-2">
            Customize your FinPilot experience
          </p>

        </div>

      </div>

      <div className="grid lg:grid-cols-2 gap-8">

        {/* Notifications */}

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <div className="flex items-center gap-3 mb-6">

            <FaBell className="text-3xl text-cyan-600" />

            <h2 className="text-2xl font-bold">
              Notifications
            </h2>

          </div>

          <label className="flex justify-between items-center py-3">
            <span>Email Alerts</span>
            <input type="checkbox" defaultChecked />
          </label>

          <label className="flex justify-between items-center py-3">
            <span>Price Alerts</span>
            <input type="checkbox" defaultChecked />
          </label>

          <label className="flex justify-between items-center py-3">
            <span>AI Recommendations</span>
            <input type="checkbox" defaultChecked />
          </label>

        </div>

        {/* Appearance */}

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <div className="flex items-center gap-3 mb-6">

            <FaMoon className="text-3xl text-purple-600" />

            <h2 className="text-2xl font-bold">
              Appearance
            </h2>

          </div>

          <label className="flex justify-between items-center py-3">
            <span>Dark Mode</span>
            <input type="checkbox" />
          </label>

          <label className="flex justify-between items-center py-3">
            <span>Compact Layout</span>
            <input type="checkbox" />
          </label>

        </div>

        {/* Security */}

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <div className="flex items-center gap-3 mb-6">

            <FaShieldAlt className="text-3xl text-green-600" />

            <h2 className="text-2xl font-bold">
              Security
            </h2>

          </div>

          <button className="w-full bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition">
            Change Password
          </button>

        </div>

        {/* Data */}

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <div className="flex items-center gap-3 mb-6">

            <FaDatabase className="text-3xl text-orange-500" />

            <h2 className="text-2xl font-bold">
              Data Management
            </h2>

          </div>

          <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold hover:bg-orange-600 transition">
            Clear Prediction History
          </button>

        </div>

      </div>

      <div className="mt-10">

        <button className="flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-700 text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">

          <FaSave />

          Save Settings

        </button>

      </div>

    </div>
  );
}

export default Settings;