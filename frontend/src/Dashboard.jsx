import { useState, useEffect } from "react";

import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";

import HeroBanner from "./components/dashboard/HeroBanner";
import AssetCard from "./components/dashboard/AssetCard";
import StatCard from "./components/dashboard/StatCard";

import PredictionForm from "./components/Prediction/PredictionForm";
import RecommendationCard from "./components/Prediction/RecommendationCard";

import MarketChart from "./components/charts/MarketChart";
import PortfolioChart from "./components/charts/PortfolioChart";

import PredictionHistory from "./components/history/PredictionHistory";
import AssetModal from "./components/modal/AssetModal";

import { FaWallet, FaChartLine, FaBullseye } from "react-icons/fa";
import PortfolioAnalytics from "./components/analytics/PortfolioAnalytics";

import MarketNews from "./components/news/MarketNews";
import Watchlist from "./components/watchlist/Watchlist";
import PortfolioPerformance from "./components/performance/PortfolioPerformance";
import GrowthChart from "./components/growth/GrowthChart";
import AssetAllocationChart from "./components/analytics/AssetAllocationChart";
import AIForecastCard from "./components/analytics/AIForecastCard";
import ChatBot from "./components/chatbot/ChatBot";
import AIInsights from "./components/analytics/AIInsights";

function Dashboard() {
  const [recommendation, setRecommendation] = useState(null);

  const [assets, setAssets] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedAsset, setSelectedAsset] = useState(null);

  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("predictionHistory");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    fetch("http://127.0.0.1:8000/assets")
      .then((res) => res.json())
      .then((data) => {
        setAssets(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const generateRecommendation = async (formData) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          goal: formData.goal,
          amount: Number(formData.amount),
          duration: Number(formData.duration),
        }),
      });

      const data = await response.json();

      setRecommendation(data);

      const newHistory = [
        {
          ...data,
          goal: formData.goal,
          createdAt: new Date().toLocaleString(),
        },
        ...history,
      ];

      setHistory(newHistory);

      localStorage.setItem("predictionHistory", JSON.stringify(newHistory));
    } catch (err) {
      console.log(err);
      alert("Prediction Error");
    }
  };

  const deleteHistory = (index) => {
    const updated = history.filter((_, i) => i !== index);

    setHistory(updated);

    localStorage.setItem("predictionHistory", JSON.stringify(updated));
  };

  const filteredAssets = assets.filter(
    (asset) =>
      asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.symbol.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const portfolioValue = assets.length
    ? assets.reduce((sum, item) => {
        const price = parseFloat(item.price.replace(/[₹,$]/g, ""));

        return sum + price;
      }, 0)
    : 0;

  const averageConfidence = recommendation?.confidence || "91%";
  return (
    <div className="relative flex min-h-screen overflow-hidden bg-gradient-to-br from-slate-100 via-cyan-50 to-blue-100">
      <Sidebar onLogout={logout} />

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-[1600px] mx-auto px-10 py-8">
          <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          <div className="mt-8">
            <HeroBanner />
          </div>

          {/* Stats */}

          <div className="grid lg:grid-cols-3 gap-6 mt-8">
            <StatCard
              title="Portfolio Value"
              value={`₹${portfolioValue.toFixed(2)}`}
              icon={<FaWallet />}
              color="from-blue-500 to-cyan-500"
            />

            <StatCard
              title="Expected Return"
              value={recommendation?.expectedReturn || "+22%"}
              icon={<FaChartLine />}
              color="from-green-500 to-emerald-600"
            />

            <StatCard
              title="AI Confidence"
              value={averageConfidence || "91%"}
              icon={<FaBullseye />}
              color="from-purple-500 to-pink-600"
            />
          </div>

          {/* Assets */}

          <div className="grid lg:grid-cols-2 xl:grid-cols-2 gap-8 mt-10">
            {filteredAssets.map((asset) => (
              <AssetCard
                key={asset.id}
                asset={asset}
                onClick={() => setSelectedAsset(asset)}
              />
            ))}
          </div>

          {/* Charts */}

          <div className="mt-10">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <MarketChart />
              </div>

              <PortfolioChart />
            </div>
          </div>

          {/* Prediction */}

          <div className="mt-10">
            <PredictionForm onGenerate={generateRecommendation} />
          </div>

          <RecommendationCard data={recommendation} />

          {/* History */}

          <PredictionHistory history={history} onDelete={deleteHistory} />

          <PortfolioAnalytics assets={assets} />
          <AIInsights />
          <MarketNews />
          <Watchlist />
          <PortfolioPerformance />
          <GrowthChart />
          <div className="grid lg:grid-cols-3 gap-8 mt-10">
            <div className="lg:col-span-2">
              <AssetAllocationChart />
            </div>

            <AIForecastCard />
          </div>
        </div>
        <ChatBot />

        {selectedAsset && (
          <AssetModal
            asset={selectedAsset}
            onClose={() => setSelectedAsset(null)}
          />
        )}
      </div>

      {/* Asset Modal */}
    </div>
  );
}

export default Dashboard;
