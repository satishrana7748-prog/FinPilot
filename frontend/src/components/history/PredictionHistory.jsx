import {
  FaClock,
  FaTrash,
  FaRobot,
} from "react-icons/fa";

function PredictionHistory({ history, onDelete }) {

  return (

    <div className ="bg-white hover:scale-[1.02] transition-all duration-300 p-6 rounded-3xl shadow-sm">

      <div className="flex items-center gap-3 mb-8">

        <FaRobot className="text-cyan-600 text-3xl" />

        <h2 className="text-3xl font-bold">

          AI Prediction History

        </h2>

      </div>

      {history.length === 0 ? (

        <div className="text-center py-12 text-gray-500">

          No predictions generated yet.

        </div>

      ) : (

        <div className="space-y-5">

          {history.map((item, index) => (

            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition"
            >

              <div className="flex justify-between items-start">

                <div>

                  <h3 className="text-2xl font-bold text-cyan-700">

                    {item.recommendation}

                  </h3>

                  <p className="mt-2">

                    Goal:
                    <span className="font-semibold">
                      {" "}{item.goal}
                    </span>

                  </p>

                  <p className="mt-1">

                    Expected Return:
                    <span className="font-semibold text-green-600">
                      {" "}{item.expectedReturn}
                    </span>

                  </p>

                  <p className="mt-1">

                    Confidence:
                    <span className="font-semibold">
                      {" "}{item.confidence}
                    </span>

                  </p>

                  <div className="flex items-center gap-2 mt-4 text-gray-500">

                    <FaClock />

                    {item.createdAt}

                  </div>

                </div>

                <button
                  onClick={() => onDelete(index)}
                  className="bg-red-500 hover:scale-105 text-white p-3 rounded-xl transition"
                >

                  <FaTrash />

                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}

export default PredictionHistory;