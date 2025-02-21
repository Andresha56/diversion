import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-[#5044FC] overflow-hidden">
      {/* Background Image - Soft Zoom-in */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-100 brightness-125 contrast-150 mix-blend-normal"
        style={{ backgroundImage: "url('/bg-hero.png')" }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      ></motion.div>

      {/* Navbar - Positioned at the Top */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>

      {/* Content - Centered & Sharp */}
      <motion.div
        className="relative text-white text-center px-6 z-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl font-custom mb-4 drop-shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          Manage your enterprise with an edge ahead
        </motion.h1>
        <motion.p
          className="text-xl font-custom mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          Track revenue, expenses, and profits efficiently
        </motion.p>

        {/* Animated Button */}
        <motion.button
          className="px-6 py-3 bg-white text-[#5044FC] font-semibold rounded-lg hover:bg-opacity-80 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* 🔽 Bottom Text - Soft Bounce */}
      <motion.div
        className="absolute bottom-2 text-center text-white text-opacity-40 text-3xl z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
      >
        <motion.p
          animate={{ y: [0, -7, 0] }} // Slightly increase the bounce effect
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} // Reduce duration for smoother effect
        >
          crafted with <span className="text-red-400 text-opacity-60">❤️</span>{" "}
          for super enterprises like yours
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
