import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", value: 120000 },
  { month: "Feb", value: 138000 },
  { month: "Mar", value: 152000 },
  { month: "Apr", value: 171000 },
  { month: "May", value: 194000 },
  { month: "Jun", value: 218000 },
  { month: "Jul", value: 242000 },
];

function GrowthChart() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mt-10">

      <div className="flex justify-between items-center mb-8">

        <div>
          <h2 className="text-3xl font-bold">
            Portfolio Growth
          </h2>

          <p className="text-gray-500 mt-2">
            7 Month Investment Performance
          </p>
        </div>

        <div className="bg-green-100 text-green-700 px-5 py-2 rounded-xl font-bold">
          +82%
        </div>

      </div>

      <div className="h-[380px]">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid strokeDasharray="5 5" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#06b6d4"
              strokeWidth={4}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default GrowthChart;