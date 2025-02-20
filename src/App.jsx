import React from "react";
import HeroSection from "./components/HeroSection";
import MarketStats from "./components/MarketStats";
import WhyUs from "./components/WhyUs";
import InventoryEdge from "./components/InventoryEdge";
import ExpenseEdge from "./components/ExpenseEdge";
import BillEdge from "./components/BillEdge";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <HeroSection />
      <MarketStats />
      <WhyUs />
      <InventoryEdge />
      <ExpenseEdge />
      <BillEdge />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
