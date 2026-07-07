import { useEffect, useState } from "react";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./Login";

import Dashboard from "./Dashboard";

import Prediction from "./pages/Prediction/Prediction";
import Investment from "./pages/MyInvestment/Investment";
import Reports from "./pages/Reports/Reports";
import Notifications from "./pages/Notifications/Notifications";
import Profile from "./pages/Profile/Profile";
import AIDecisions from "./pages/AIDecisions/AIDecisions";

function App() {
  const [darkMode, setDarkMode] = useState(
  localStorage.getItem("theme") === "dark"
);

useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}, [darkMode]);
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));

  if (!loggedIn) {
    return <Login onLogin={setLoggedIn} />;
  }

  return (
    <Routes>
      <Route path="/ai-decisions" element={<AIDecisions />} />

      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/prediction" element={<Prediction />} />

      <Route path="/investment" element={<Investment />} />

      <Route path="/reports" element={<Reports />} />

      <Route path="/notifications" element={<Notifications />} />

      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
