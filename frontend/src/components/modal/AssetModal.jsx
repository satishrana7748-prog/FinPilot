import { FaXmark } from "react-icons/fa6";


function AssetModal({ asset, onClose }) {
  if (!asset) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-center items-center p-5">

      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl overflow-hidden">

        {/* Header */}

        <div className="bg-gradient-to-r from-cyan-600 via-blue-700 to-indigo-700 text-white px-8 py-6 flex justify-between items-center">

          <div>

            <h2 className="text-3xl font-bold">
              {asset.icon} {asset.name}
            </h2>

            <p className="opacity-90 mt-2">
              {asset.symbol}
            </p>

          </div>

          <button
            onClick={onClose}
            className="text-3xl hover:rotate-90 transition"
          >
            <FaXmark />
          </button>

        </div>

        {/* Body */}

        <div className="p-8 grid md:grid-cols-2 gap-6">

          <div className="bg-slate-100 rounded-2xl p-5">

            <h3 className="font-bold mb-4">
              Current Details
            </h3>

            <p><b>Price :</b> {asset.price}</p>

            <p className="mt-2"><b>Today's Change :</b> {asset.change}</p>

            <p className="mt-2"><b>Trend :</b> {asset.trend}</p>

            <p className="mt-2"><b>Risk :</b> {asset.risk}</p>

          </div>

          <div className="bg-slate-100 rounded-2xl p-5">

            <h3 className="font-bold mb-4">
              AI Analysis
            </h3>

            <p>
              FinPilot AI analyzed historical prices,
              technical indicators and current market trend.
            </p>

            <div className="mt-5">

              <div className="flex justify-between mb-2">

                <span>Confidence</span>

                <span>91%</span>

              </div>

              <div className="h-3 bg-gray-300 rounded-full">

                <div className="w-[91%] h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"></div>

              </div>

            </div>

          </div>

        </div>

        {/* Footer */}

        <div className="px-8 pb-8">

          <div className="bg-green-50 border border-green-200 rounded-2xl p-6">

            <h3 className="text-xl font-bold text-green-700">
              AI Recommendation
            </h3>

            <p className="mt-3">

              Based on current market conditions, FinPilot AI
              recommends

              <span className="font-bold text-green-700">

                {" "} {asset.action}

              </span>

              {" "}for this asset.

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AssetModal;