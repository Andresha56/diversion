import React from "react";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-[#5044FC]">
      {/* Background Image - Max Visibility */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100 brightness-125 contrast-150 grayscale-0 mix-blend-normal"
        style={{
          backgroundImage: "url('/bg-hero.png')",
        }}
      ></div>

      {/* **Super Light** Blue Overlay */}
      <div className="absolute inset-0 bg-[#5044FC] bg-opacity-20"></div>

      {/* Content - Clear and Sharp */}
      <div className="relative text-white text-center px-6">
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
    </section>
  );
};

export default HeroSection;
