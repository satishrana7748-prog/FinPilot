import { useState } from "react";
import {
  FaBullseye,
  FaRupeeSign,
  FaCalendarAlt,
  FaRocket,
  FaRobot,
  FaChartLine,
} from "react-icons/fa";

function PredictionForm({ onGenerate }) {
  const [goal, setGoal] = useState("");
  const [amount, setAmount] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = () => {
    onGenerate({
      goal,
      amount,
      duration,
    });
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl border border-slate-200">

      {/* Background */}

      <div className="absolute -top-20 -right-20 w-72 h-72 bg-cyan-100 rounded-full blur-3xl opacity-40"></div>

      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40"></div>

      <div className="relative p-10">

        {/* Header */}

        <div className="flex justify-between items-center flex-wrap gap-5">

          <div>

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 font-semibold">

              <FaRobot />

              AI Recommendation Engine

            </span>

            <h2 className="text-4xl font-black text-slate-800 mt-5">

              Generate Smart Investment Plan

            </h2>

            <p className="text-gray-500 mt-3 max-w-2xl">

              Enter your investment details and let FinPilot AI analyze
              multiple assets to recommend the best investment strategy.

            </p>

          </div>

          <div className="hidden lg:flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-4 rounded-2xl shadow-lg">

            <FaChartLine className="text-3xl" />

            <div>

              <h3 className="font-bold text-xl">
                91%
              </h3>

              <p className="text-sm">
                Prediction Accuracy
              </p>

            </div>

          </div>

        </div>

        {/* Inputs */}

        <div className="grid lg:grid-cols-3 gap-7 mt-10">

          <div>

            <label className="font-bold text-slate-700 flex items-center gap-2 mb-3">

              <FaBullseye className="text-cyan-600" />

              Investment Goal

            </label>

            <input
              type="text"
              placeholder="Retirement / Wealth Creation"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full rounded-2xl border border-gray-300 bg-slate-50 px-5 py-4 outline-none focus:ring-4 focus:ring-cyan-200 transition"
            />

          </div>

          <div>

            <label className="font-bold text-slate-700 flex items-center gap-2 mb-3">

              <FaRupeeSign className="text-green-600" />

              Investment Amount

            </label>

            <input
              type="number"
              placeholder="100000"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full rounded-2xl border border-gray-300 bg-slate-50 px-5 py-4 outline-none focus:ring-4 focus:ring-green-200 transition"
            />

          </div>

          <div>

            <label className="font-bold text-slate-700 flex items-center gap-2 mb-3">

              <FaCalendarAlt className="text-purple-600" />

              Investment Duration

            </label>

            <input
              type="number"
              placeholder="5 Years"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full rounded-2xl border border-gray-300 bg-slate-50 px-5 py-4 outline-none focus:ring-4 focus:ring-purple-200 transition"
            />

          </div>

        </div>

        {/* Button */}

        <div className="mt-10 flex justify-center">

          <button
            onClick={handleSubmit}
            className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 text-white px-12 py-4 rounded-2xl text-lg font-bold shadow-xl hover:shadow-cyan-300 hover:scale-105 transition duration-300 flex items-center gap-3"
          >

            <FaRocket />

            Generate AI Recommendation

          </button>

        </div>

      </div>

    </div>
  );
}

export default PredictionForm;