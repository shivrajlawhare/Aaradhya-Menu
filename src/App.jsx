import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RestaurantMenu from "./pages/RestaurantMenu";
import BarMenu from "./pages/BarMenu";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/restaurant" element={<RestaurantMenu />} />
        <Route path="/bar" element={<BarMenu />} />
      </Routes>
    </Router>
  );
}
