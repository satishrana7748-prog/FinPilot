import {
  FaNewspaper,
  FaArrowRight,
} from "react-icons/fa";

function MarketNews() {

  const news = [

    {
      title: "Bitcoin surges after ETF inflows",
      source: "CoinDesk",
      time: "15 min ago",
      sentiment: "Bullish",
      color: "green",
    },

    {
      title: "Gold remains stable amid global uncertainty",
      source: "Reuters",
      time: "45 min ago",
      sentiment: "Neutral",
      color: "yellow",
    },

    {
      title: "Indian stock market closes at record high",
      source: "Economic Times",
      time: "1 hour ago",
      sentiment: "Bullish",
      color: "green",
    },

    {
      title: "Silver demand expected to increase in 2026",
      source: "Bloomberg",
      time: "2 hours ago",
      sentiment: "Positive",
      color: "blue",
    },

  ];

  return (

    <div className="bg-white rounded-3xl shadow-xl p-8 mt-10">

      <div className="flex justify-between items-center mb-8">

        <div className="flex items-center gap-3">

          <FaNewspaper className="text-3xl text-cyan-600" />

          <h2 className="text-3xl font-bold">

            Market News

          </h2>

        </div>

        <button className="text-cyan-600 font-bold flex items-center gap-2 hover:gap-3 transition">

          View All

          <FaArrowRight />

        </button>

      </div>

      <div className="space-y-5">

        {news.map((item, index) => (

          <div
            key={index}
            className="bg-slate-50 rounded-2xl p-5 hover:shadow-lg transition"
          >

            <div className="flex justify-between">

              <div>

                <h3 className="font-bold text-xl">

                  {item.title}

                </h3>

                <p className="text-gray-500 mt-2">

                  {item.source} • {item.time}

                </p>

              </div>

              <span
                className={`px-4 py-2 rounded-xl font-bold
                ${
                  item.color === "green"
                    ? "bg-green-100 text-green-700"
                    : item.color === "yellow"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {item.sentiment}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default MarketNews;