import { useEffect, useState } from "react";
import {
  FaChartLine,
  FaBullseye,
  FaCalendarAlt,
} from "react-icons/fa";

function Reports() {

  const [history, setHistory] = useState([]);

  useEffect(() => {

    const saved = localStorage.getItem("predictionHistory");

    if (saved) {

      setHistory(JSON.parse(saved));

    }

  }, []);

  return (

    <div className="p-10">

      <h1 className="text-4xl font-black text-slate-800">

        Reports

      </h1>

      <p className="text-gray-600 mt-2">

        AI Prediction Report Summary

      </p>

      <div className="mt-10 space-y-6">

        {history.length === 0 ? (

          <div className="bg-white rounded-2xl shadow-lg p-8">

            No Reports Available

          </div>

        ) : (

          history.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8"
            >

              <div className="flex justify-between">

                <h2 className="text-2xl font-bold">

                  {item.goal}

                </h2>

                <div className="flex items-center gap-2 text-gray-500">

                  <FaCalendarAlt />

                  {item.createdAt}

                </div>

              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">

                <div className="bg-green-50 rounded-2xl p-6">

                  <FaChartLine className="text-3xl text-green-600"/>

                  <h3 className="mt-4 font-bold">

                    Recommendation

                  </h3>

                  <h1 className="text-3xl font-black text-green-600 mt-2">

                    {item.recommendation}

                  </h1>

                </div>

                <div className="bg-blue-50 rounded-2xl p-6">

                  <FaChartLine className="text-3xl text-blue-600"/>

                  <h3 className="mt-4 font-bold">

                    Expected Return

                  </h3>

                  <h1 className="text-3xl font-black text-blue-600 mt-2">

                    {item.expectedReturn}

                  </h1>

                </div>

                <div className="bg-purple-50 rounded-2xl p-6">

                  <FaBullseye className="text-3xl text-purple-600"/>

                  <h3 className="mt-4 font-bold">

                    Confidence

                  </h3>

                  <h1 className="text-3xl font-black text-purple-600 mt-2">

                    {item.confidence}

                  </h1>

                </div>

              </div>

            </div>

          ))

        )}

      </div>

    </div>

  );

}

export default Reports;