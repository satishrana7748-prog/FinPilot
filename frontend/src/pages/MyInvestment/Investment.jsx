import { useEffect, useState } from "react";

import {
  FaBell,
  FaRobot,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";

function Notifications() {

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {

    const history =
      JSON.parse(localStorage.getItem("predictionHistory")) || [];

    const data = history.map((item) => ({

      title: `AI Recommendation : ${item.recommendation}`,

      description: `Goal : ${item.goal}`,

      date: item.createdAt,

      icon: <FaRobot className="text-cyan-600 text-3xl" />,

    }));

    data.unshift({

      title: "Market Update",

      description:
        "Stock market is showing bullish momentum today.",

      date: new Date().toLocaleString(),

      icon: <FaChartLine className="text-green-600 text-3xl" />,

    });

    data.unshift({

      title: "Login Successful",

      description:
        "Welcome back to FinPilot.",

      date: new Date().toLocaleString(),

      icon: <FaCheckCircle className="text-blue-600 text-3xl" />,

    });

    setNotifications(data);

  }, []);

  return (

    <div className="p-10">

      <div className="flex items-center gap-4">

        <FaBell className="text-4xl text-cyan-600" />

        <div>

          <h1 className="text-4xl font-black">

            Notifications

          </h1>

          <p className="text-gray-500 mt-1">

            Recent AI Activities

          </p>

        </div>

      </div>

      <div className="space-y-6 mt-10">

        {notifications.length === 0 ? (

          <div className="bg-white rounded-3xl shadow-lg p-10">

            No Notifications Available

          </div>

        ) : (

          notifications.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-6 flex gap-5 items-start hover:shadow-xl transition"
            >

              {item.icon}

              <div className="flex-1">

                <h2 className="text-xl font-bold">

                  {item.title}

                </h2>

                <p className="text-gray-600 mt-2">

                  {item.description}

                </p>

                <p className="text-sm text-gray-400 mt-3">

                  {item.date}

                </p>

              </div>

            </div>

          ))

        )}

      </div>

    </div>

  );

}

export default Notifications;