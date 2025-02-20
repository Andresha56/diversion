import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-[#5044FC]">
      {/* Background Image - Fully Visible */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100 brightness-125 contrast-150 mix-blend-normal"
        style={{
          backgroundImage: "url('/bg-hero.png')",
        }}
      ></div>

      {/* Navbar - Positioned at the Top */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>

      {/* Content - Centered & Sharp */}
      <div className="relative text-white text-center px-6 z-20">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-2xl">
          Manage your enterprise with an edge ahead
        </h1>
        <p className="text-xl mb-6 drop-shadow-lg">
          Track revenue, expenses, and profits efficiently
        </p>
        <button className="px-6 py-3 bg-white text-[#5044FC] font-semibold rounded-lg hover:bg-opacity-80">
          Get Started
        </button>
      </div>

      {/* 🔽 Bottom Text - Positioned with Transparency */}
      <div className="absolute bottom-2 text-center text-white text-opacity-40 text-3xl z-20">
        <p>
          crafted with <span className="text-red-400 text-opacity-60">❤️</span>{" "}
          for super enterprises like yours
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
