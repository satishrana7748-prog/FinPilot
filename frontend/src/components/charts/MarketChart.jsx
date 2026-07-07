import { useEffect, useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function MarketChart() {
  const [asset, setAsset] = useState("stock");
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/data/${asset}`)
      .then((res) => res.json())
      .then((data) => {
        setChartData(data);
      })
      .catch((err) => console.log(err));
  }, [asset]);

  return (
    <div className="mt-10">
      <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Header */}

        <div className="bg-gradient-to-r from-slate-950 via-blue-900 to-cyan-700 px-8 py-7 flex flex-col lg:flex-row justify-between items-center gap-5">
          <div>
            <h2 className="text-4xl font-black tracking-wide text-white">
              Live Market Trends
            </h2>

            <p className="text-cyan-100 mt-2">
              AI Powered Real-Time Market Analysis
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 bg-emerald-500 px-5 py-2 rounded-full text-white font-bold shadow-lg animate-pulse">
              ● LIVE
            </span>

            <select
              value={asset}
              onChange={(e) => setAsset(e.target.value)}
              className="bg-white border border-slate-200 px-5 py-3 rounded-2xl shadow-lg font-semibold outline-none hover:shadow-xl transition"
            >
              <option value="stock">Stocks</option>
              <option value="gold">Gold</option>
              <option value="silver">Silver</option>
              <option value="crypto">Bitcoin</option>
            </select>
          </div>
        </div>

        {/* Chart */}

        <div className="p-8 bg-gradient-to-b from-white to-slate-50">
          <ResponsiveContainer width="100%" height={420}>
            <LineChart data={chartData}>
              <CartesianGrid stroke="#E5E7EB" strokeDasharray="5 5" />

              <XAxis dataKey="date" tick={{ fill: "#64748b" }} />

              <YAxis tick={{ fill: "#64748b" }} />

              <Tooltip
                contentStyle={{
                  borderRadius: "18px",
                  border: "none",
                  boxShadow: "0px 6px 20px rgba(0,0,0,0.15)",
                }}
              />

              <Line
                type="monotone"
                dataKey="price"
                stroke="#2563eb"
                strokeWidth={5}
                dot={false}
                activeDot={{
                  r: 9,
                  fill: "#2563eb",
                  stroke: "#ffffff",
                  strokeWidth: 3,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default MarketChart;
