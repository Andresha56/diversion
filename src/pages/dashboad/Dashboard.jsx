import React, { useCallback, useState, useRef, useEffect } from "react";
import { StatsSection } from "../../components/User/StatsSection";
import { ActionCards } from "../../components/User/ActionCards";
import { ChatButton } from "../../components/User/ChatBox";
import { Footer } from "../../components/User/Footer";
import { logoutUser } from "../../context/userdata";
import { useNavigate } from "react-router-dom";
import { userAuth } from "../../context/UserContext";
import axios from "axios";
import "./dashboad.css";
import {
  HomeIcon,
  ExpenseIcon,
  BillingIcon,
  InventaryIcon,
} from "../../../icons";
import { Home } from "../../components/dashboad/Home";
import { Expenses } from "../../components/dashboad/Expenses";
import { Billing } from "../../components/dashboad/Billing";
import { Inventory } from "../../components/dashboad/Inventory";
import { AnimatePresence, motion } from "framer-motion";

const tabs = [
  { id: "home", label: "Home", Icon: HomeIcon },
  { id: "expenses", label: "Expenses", Icon: ExpenseIcon },
  { id: "billing", label: "Billing", Icon: BillingIcon },
  { id: "inventory", label: "Inventory", Icon: InventaryIcon },
];

const DashboardLayout = () => {
  const [component, setComponent] = useState("home");
  const [underlineProps, setUnderlineProps] = useState({ width: 0, left: 0 });
  const tabRefs = useRef({});

  const tabHandler = useCallback((event) => {
    setComponent(event);
  }, []);

  useEffect(() => {
    const activeTab = tabRefs.current[component];
    if (activeTab) {
      setUnderlineProps({
        width: activeTab.offsetWidth,
        left: activeTab.offsetLeft,
      });
    }
  }, [component]);

  const renderComponent = () => {
    switch (component) {
      case "home":
        return <Home />;
      case "expenses":
        return <Expenses />;
      case "billing":
        return <Billing />;
      case "inventory":
        return <Inventory />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Ravenna:wght@400;900&display=swap"
      />
      <main className="relative p-10 min-h-screen">
        <header>
          <h1 className="mb-5 text-6xl font-black text-indigo-600 max-sm:text-4xl">
            Welcome
          </h1>
        </header>

        {/* Dashboard Tabs with Animated Underline */}
        <div className="relative tab-shadow flex justify-center gap-4 bg-[oklch(0.985_0.001_106.423)] p-4 w-[40%] m-auto rounded-xl mb-20">
          {tabs.map(({ id, label, Icon }) => (
            <button
              key={id}
              ref={(el) => (tabRefs.current[id] = el)}
              className={`flex flex-col items-center mr-8 ml-8 relative ${
                component === id ? "text-indigo-600" : "text-zinc-700"
              }`}
              onClick={() => tabHandler(id)}
            >
              <Icon
                color={component === id ? "#4F46E5" : "#292D32"}
                size={24}
              />
              {label}
            </button>
          ))}

          {/* Animated Underline */}
          <motion.div
            className="absolute bottom-2 h-1 bg-indigo-600 rounded-full"
            initial={false}
            animate={{ width: underlineProps.width, left: underlineProps.left }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        </div>

        {/* Animated Component Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={component}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {renderComponent()}
          </motion.div>
        </AnimatePresence>

        <ChatButton />
      </main>
    </>
  );
};

export default DashboardLayout;
