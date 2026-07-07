import {
  FaArrowUp,
  FaArrowDown,
  FaWallet,
} from "react-icons/fa";

function PortfolioPerformance() {

  const stats = [
    {
      title: "Today's Profit",
      value: "+₹12,540",
      icon: <FaArrowUp />,
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      title: "Today's Loss",
      value: "-₹2,180",
      icon: <FaArrowDown />,
      color: "text-red-600",
      bg: "bg-red-50",
    },
    {
      title: "Portfolio Value",
      value: "₹8,42,500",
      icon: <FaWallet />,
      color: "text-cyan-600",
      bg: "bg-cyan-50",
    },
  ];

  return (

    <div className="bg-white rounded-3xl shadow-xl p-8 mt-10">

      <h2 className="text-3xl font-bold mb-8">

        Portfolio Performance

      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {stats.map((item, index) => (

          <div
            key={index}
            className={`${item.bg} rounded-2xl p-6 hover:scale-105 transition duration-300`}
          >

            <div className={`text-4xl ${item.color}`}>

              {item.icon}

            </div>

            <h3 className="mt-5 text-gray-500">

              {item.title}

            </h3>

            <h1 className={`text-3xl font-bold mt-2 ${item.color}`}>

              {item.value}

            </h1>

          </div>

        ))}

      </div>

      <div className="mt-10">

        <div className="flex justify-between mb-3">

          <span className="font-semibold">

            Overall Portfolio Growth

          </span>

          <span className="font-bold text-green-600">

            +82%

          </span>

        </div>

        <div className="h-4 bg-gray-200 rounded-full overflow-hidden">

          <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-green-500 to-cyan-500"></div>

        </div>

      </div>

    </div>

  );

}

export default PortfolioPerformance;