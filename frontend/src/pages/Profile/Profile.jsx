import {
  FaUserCircle,
  FaEnvelope,
  FaGraduationCap,
  FaChartLine,
  FaRobot,
  FaWallet,
  FaEdit,
} from "react-icons/fa";

function Profile() {
  return (
    <div className="p-10 bg-slate-100 min-h-screen">

      {/* Header */}

      <div className="bg-white rounded-3xl shadow-xl p-8">

        <div className="flex flex-col lg:flex-row items-center gap-8">

          <img
            src={localStorage.getItem("profileImage") || "https://i.pravatar.cc/150?img=12"}
            alt="profile"
            className="w-40 h-40 rounded-full border-4 border-cyan-500 object-cover"
          />

          <div className="flex-1">

            <h1 className="text-4xl font-bold">
              Satish Rana
            </h1>

            <p className="text-gray-500 mt-2">
              B.Tech Student | AI & Full Stack Developer
            </p>

            <div className="flex gap-6 mt-6 flex-wrap">

              <div className="flex items-center gap-2">
                <FaEnvelope className="text-cyan-600" />
                <span>satish@example.com</span>
              </div>

              <div className="flex items-center gap-2">
                <FaGraduationCap className="text-cyan-600" />
                <span>B.Tech CSE</span>
              </div>

            </div>

          </div>

          <button className="bg-gradient-to-r from-cyan-500 to-blue-700 text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition flex items-center gap-2">

            <FaEdit />

            Edit Profile

          </button>

        </div>

      </div>

      {/* Stats */}

      <div className="grid lg:grid-cols-4 gap-6 mt-10">

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <FaRobot className="text-4xl text-cyan-600 mb-4" />

          <h3 className="text-gray-500">
            AI Predictions
          </h3>

          <h1 className="text-3xl font-bold mt-2">
            128
          </h1>

        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <FaWallet className="text-4xl text-green-600 mb-4" />

          <h3 className="text-gray-500">
            Portfolio Value
          </h3>

          <h1 className="text-3xl font-bold mt-2">
            ₹12.5L
          </h1>

        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <FaChartLine className="text-4xl text-blue-600 mb-4" />

          <h3 className="text-gray-500">
            Success Rate
          </h3>

          <h1 className="text-3xl font-bold mt-2">
            91%
          </h1>

        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <FaUserCircle className="text-4xl text-purple-600 mb-4" />

          <h3 className="text-gray-500">
            AI Score
          </h3>

          <h1 className="text-3xl font-bold mt-2">
            A+
          </h1>

        </div>

      </div>

      {/* About */}

      <div className="bg-white rounded-3xl shadow-xl p-8 mt-10">

        <h2 className="text-3xl font-bold mb-6">
          About
        </h2>

        <p className="text-gray-600 leading-8">

          FinPilot is an AI-powered Multi-Asset Recommendation
          System developed as a B.Tech Major Project.
          It provides intelligent investment recommendations,
          portfolio analytics, market insights, and AI-assisted
          financial decision support for Stocks, Gold, Silver,
          and Cryptocurrency.

        </p>

      </div>

    </div>
  );
}

export default Profile;