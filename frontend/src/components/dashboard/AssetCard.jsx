import {
  FaArrowTrendUp,
  FaArrowTrendDown,
} from "react-icons/fa6";

function AssetCard({ asset, onClick }) {
  const positive = asset.change.includes("+");

  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6"
    >
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="text-5xl">
            {asset.icon}
          </div>

          <div>

            <h2 className="text-2xl font-bold">
              {asset.name}
            </h2>

            <p className="text-gray-500">
              {asset.symbol}
            </p>

          </div>

        </div>

        <div
          className={`text-2xl ${
            positive ? "text-green-500" : "text-red-500"
          }`}
        >
          {positive ? (
            <FaArrowTrendUp />
          ) : (
            <FaArrowTrendDown />
          )}
        </div>

      </div>

      <div className="mt-8">

        <h1 className="text-4xl font-black">
          {asset.price}
        </h1>

        <p
          className={`mt-2 font-bold ${
            positive
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {asset.change}
        </p>

      </div>

      <div className="mt-8 flex justify-between items-center">

        <span className="text-gray-500">
          Risk
        </span>

        <span className="font-bold">
          {asset.risk}
        </span>

      </div>

      <div className="mt-3 flex justify-between items-center">

        <span className="text-gray-500">
          Trend
        </span>

        <span className="font-bold">
          {asset.trend}
        </span>

      </div>

      <button
        className="mt-8 w-full py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-700 text-white font-bold"
      >
        View Details
      </button>

    </div>
  );
}

export default AssetCard;