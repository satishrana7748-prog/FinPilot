import {
  FaStar,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";

function Watchlist() {

  const assets = [

    {
      name: "Bitcoin",
      symbol: "BTC",
      price: "₹98,25,000",
      change: "+4.8%",
      up: true,
    },

    {
      name: "Gold",
      symbol: "XAU",
      price: "₹9,820",
      change: "+1.3%",
      up: true,
    },

    {
      name: "Silver",
      symbol: "XAG",
      price: "₹112",
      change: "-0.8%",
      up: false,
    },

    {
      name: "Reliance",
      symbol: "RELIANCE",
      price: "₹3,245",
      change: "+2.1%",
      up: true,
    },

  ];

  return (

    <div className="bg-white rounded-3xl shadow-xl p-8 mt-10">

      <div className="flex justify-between items-center mb-8">

        <h2 className="text-3xl font-bold">

          Watchlist

        </h2>

        <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2 rounded-xl font-bold hover:scale-105 transition">

          + Add Asset

        </button>

      </div>

      <div className="space-y-5">

        {assets.map((item, index) => (

          <div
            key={index}
            className="flex justify-between items-center bg-slate-50 rounded-2xl p-5 hover:shadow-lg transition"
          >

            <div className="flex items-center gap-4">

              <FaStar className="text-yellow-500 text-xl" />

              <div>

                <h3 className="font-bold text-xl">

                  {item.name}

                </h3>

                <p className="text-gray-500">

                  {item.symbol}

                </p>

              </div>

            </div>

            <div className="text-right">

              <h3 className="font-bold text-xl">

                {item.price}

              </h3>

              <div
                className={`flex items-center justify-end gap-2 mt-1 ${
                  item.up
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >

                {item.up
                  ? <FaArrowUp />
                  : <FaArrowDown />
                }

                {item.change}

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Watchlist;