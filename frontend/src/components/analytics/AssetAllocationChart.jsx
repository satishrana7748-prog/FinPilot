import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

export default function AssetAllocationChart() {

  const [data, setData] = useState([]);

  useEffect(() => {

    const allocation = [
      { name: "Stocks", value: 50 },
      { name: "Gold", value: 20 },
      { name: "Silver", value: 10 },
      { name: "Bitcoin", value: 20 },
    ];

    setData(allocation);

  }, []);

  const COLORS = [
    "#2563eb",
    "#16a34a",
    "#f59e0b",
    "#9333ea",
  ];

  return (

    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">

        Asset Allocation

      </h2>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={110}
              label
            >

              {data.map((entry, index) => (

                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />

              ))}

            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

}