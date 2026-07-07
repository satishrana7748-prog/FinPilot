import {
  FaArrowTrendUp,
  FaBitcoin,
} from "react-icons/fa6";

import {
  FaCoins,
  FaChartLine,
} from "react-icons/fa";

function HeroBanner() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-950 via-blue-900 to-cyan-700 text-white p-10 shadow-2xl">

      {/* Background Decoration */}

      <div className="absolute -top-20 -right-20 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      {/* Content */}

      <div className="relative z-10">

        <div className="flex items-center gap-3 mb-4">

          <FaArrowTrendUp className="text-4xl text-green-400" />

          <span className="bg-green-500 px-4 py-1 rounded-full text-sm font-bold animate-pulse">

            AI ACTIVE

          </span>

        </div>

        <h1 className="text-5xl font-black leading-tight">

          Welcome to <span className="text-cyan-300">FinPilot</span>

        </h1>

        <p className="mt-4 text-cyan-100 text-lg max-w-2xl">

          AI-powered multi-asset investment recommendations,
          portfolio analytics, market insights and intelligent
          financial decision support.

        </p>

        {/* Live Market Ticker */}

        <div className="grid md:grid-cols-3 gap-5 mt-10">

          <div className="bg-white hover:scale-105 transition-all duration-300">

            <div className="flex items-center justify-between">

              <FaBitcoin className="text-4xl text-yellow-400" />

              <span className="text-green-400 font-bold">

                +4.8%

              </span>

            </div>

            <h3 className="mt-4 text-xl font-bold">

              Bitcoin

            </h3>

            <p className="text-cyan-100">

              ₹98,25,000

            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5">

            <div className="flex items-center justify-between">

              <FaCoins className="text-4xl text-yellow-300" />

              <span className="text-green-400 font-bold">

                +1.2%

              </span>

            </div>

            <h3 className="mt-4 text-xl font-bold">

              Gold

            </h3>

            <p className="text-cyan-100">

              ₹9,820

            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5">

            <div className="flex items-center justify-between">

              <FaChartLine className="text-4xl text-cyan-300" />

              <span className="text-green-400 font-bold">

                +2.7%

              </span>

            </div>

            <h3 className="mt-4 text-xl font-bold">

              NIFTY 50

            </h3>

            <p className="text-cyan-100">

              26,780

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default HeroBanner;