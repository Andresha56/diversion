import HeroSection from "../components/HeroSection";
import MarketStats from "../components/MarketStats";
import WhyUs from "../components/WhyUs";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import InventoryEdge from '../components/InventoryEdge'
import ExpenseEdge from '../components/ExpenseEdge'
import BillEdge from '../components/BillEdge'
export default function Home() {
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
