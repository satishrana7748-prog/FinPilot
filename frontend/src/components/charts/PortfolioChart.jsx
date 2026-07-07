import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "Stocks", value: 45 },
  { name: "Gold", value: 25 },
  { name: "Bitcoin", value: 20 },
  { name: "Silver", value: 10 },
];

const COLORS = [
  "#2563eb",
  "#10b981",
  "#f59e0b",
  "#8b5cf6",
];

function PortfolioChart() {
  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-7 h-full">

      {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <div>

          <h2 className="text-2xl font-bold text-slate-800">
            Portfolio Allocation
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            AI Suggested Asset Distribution
          </p>

        </div>

        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-xl font-bold shadow">
          ₹12.5L
        </div>

      </div>

      {/* Chart */}

      <div className="relative">

        <ResponsiveContainer width="100%" height={320}>

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={85}
              outerRadius={120}
              paddingAngle={5}
              stroke="white"
              strokeWidth={3}
            >

              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

        {/* Center Text */}

        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">

          <h2 className="text-3xl font-black text-slate-800">
            100%
          </h2>

          <p className="text-gray-500 text-sm">
            Allocation
          </p>

        </div>

      </div>

      {/* Legend */}

      <div className="grid grid-cols-2 gap-4 mt-6">

        {data.map((item, index) => (

          <div
            key={index}
            className="flex justify-between items-center bg-slate-50 rounded-xl px-4 py-3"
          >

            <div className="flex items-center gap-3">

              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: COLORS[index],
                }}
              />

              <span className="font-medium text-slate-700">
                {item.name}
              </span>

            </div>

            <span className="font-bold text-slate-800">
              {item.value}%
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default PortfolioChart;