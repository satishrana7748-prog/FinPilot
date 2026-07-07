import {
  FaChartPie,
  FaShieldAlt,
  FaChartLine,
  FaClock,
} from "react-icons/fa";

function AnalyticsCard({
  icon,
  title,
  value,
  progress,
  color,
}) {
  return (
    <div className="bg-white  hover:scale-105 transition-all duration-300">

      <div className="flex justify-between items-center">

        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white text-3xl ${color}`}
        >
          {icon}
        </div>

        <span className="text-sm text-gray-500">
          AI Score
        </span>

      </div>

      <h3 className="text-gray-500 mt-6">
        {title}
      </h3>

      <h1 className="text-4xl font-black mt-2">
        {value}
      </h1>

      <div className="mt-7">

        <div className="flex justify-between text-sm mb-2">

          <span>Performance</span>

          <span>{progress}%</span>

        </div>

        <div className="h-3 rounded-full bg-gray-200 overflow-hidden">

          <div
            className={`h-full rounded-full ${color}`}
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

    </div>
  );
}

export default function PortfolioAnalytics({ assets }) {

  if (!assets || assets.length === 0)
    return null;

  const portfolioValue = assets.reduce((sum, item) => {

    const price = Number(
      item.price.replace(/[₹,$,]/g, "")
    );

    return sum + price;

  }, 0);

  const diversification = Math.min(
    assets.length * 22,
    100
  );

  const buyCount = assets.filter(
    (a) => a.action === "BUY"
  ).length;

  const expectedReturn = 10 + buyCount * 4;

  const riskCount = assets.filter(
    (a) => a.risk === "High"
  ).length;

  let risk = "Low";

  if (riskCount >= 2) risk = "High";
  else if (riskCount === 1) risk = "Medium";

  return (

    <div className="mt-12">

      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-4xl font-black">

            Portfolio Analytics

          </h2>

          <p className="text-gray-500 mt-2">

            AI Generated Portfolio Health Analysis

          </p>

        </div>

        <div className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-700 text-white font-bold shadow-lg">

          FinPilot AI

        </div>

      </div>

      <div className="grid lg:grid-cols-4 gap-7">

        <AnalyticsCard
          icon={<FaChartPie />}
          title="Diversification"
          value={`${diversification}%`}
          progress={diversification}
          color="bg-blue-600"
        />

        <AnalyticsCard
          icon={<FaShieldAlt />}
          title="Risk Score"
          value={risk}
          progress={
            risk === "High"
              ? 92
              : risk === "Medium"
              ? 65
              : 35
          }
          color="bg-red-500"
        />

        <AnalyticsCard
          icon={<FaChartLine />}
          title="Expected CAGR"
          value={`${expectedReturn}%`}
          progress={expectedReturn * 4}
          color="bg-green-600"
        />

        <AnalyticsCard
          icon={<FaClock />}
          title="Portfolio Value"
          value={`₹${portfolioValue.toLocaleString()}`}
          progress={90}
          color="bg-purple-600"
        />

      </div>

    </div>

  );
}