import { useEffect, useState } from "react";
import { FaRobot } from "react-icons/fa";

export default function AIForecastCard() {

  const [forecast, setForecast] = useState({
    trend: "",
    confidence: "",
    expectedReturn: "",
    suggestion: "",
  });

  useEffect(() => {

    // Demo AI Forecast
    setForecast({
      trend: "Bullish",
      confidence: "91%",
      expectedReturn: "18% - 24%",
      suggestion: "Increase exposure to Stocks and Bitcoin while maintaining Gold for risk balancing.",
    });

  }, []);

  return (

    <div className="bg-white rounded-3xl shadow-lg p-6 h-full">

      <div className="flex items-center gap-3 mb-6">

        <FaRobot className="text-cyan-600 text-3xl" />

        <h2 className="text-2xl font-bold">

          AI Forecast

        </h2>

      </div>

      <div className="space-y-5">

        <div className="bg-green-50 rounded-2xl p-5">

          <p className="text-gray-500">

            Market Trend

          </p>

          <h1 className="text-3xl font-bold text-green-600 mt-2">

            {forecast.trend}

          </h1>

        </div>

        <div className="bg-blue-50 rounded-2xl p-5">

          <p className="text-gray-500">

            Confidence

          </p>

          <h1 className="text-2xl font-bold text-blue-600 mt-2">

            {forecast.confidence}

          </h1>

        </div>

        <div className="bg-purple-50 rounded-2xl p-5">

          <p className="text-gray-500">

            Expected Return

          </p>

          <h1 className="text-2xl font-bold text-purple-600 mt-2">

            {forecast.expectedReturn}

          </h1>

        </div>

        <div className="bg-slate-100 rounded-2xl p-5">

          <h3 className="font-bold mb-3">

            AI Suggestion

          </h3>

          <p className="text-gray-700 leading-7">

            {forecast.suggestion}

          </p>

        </div>

      </div>

    </div>

  );

}