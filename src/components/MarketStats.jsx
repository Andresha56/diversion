import React from "react";

const MarketStats = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-12 relative text-[#2600FC]">
      {/* Title */}
      <h2 className="text-3xl font-extrabold text-[#2600FC] mb-6">
        The market
      </h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-6 text-white text-lg font-semibold">
        {/* Top Row */}
        <div className="bg-[#6200EA] px-6 py-4 rounded-xl shadow-md text-center">
          <p className="text-sm opacity-90 font-medium">
            MSME's using computers
          </p>
          <p className="text-2xl font-extrabold mt-1">› 77 lakhs</p>
        </div>

        <div className="bg-[#6200EA] px-6 py-4 rounded-xl shadow-md text-center">
          <p className="text-sm opacity-90 font-medium">Percentage</p>
          <p className="text-2xl font-extrabold mt-1">› 83 %</p>
        </div>

        {/* Bottom Row */}
        <div className="bg-[#9156F8] px-6 py-4 rounded-xl shadow-md text-center">
          <p className="text-sm opacity-90 font-medium">
            Total MSME's in India
          </p>
          <p className="text-2xl font-extrabold mt-1">› 6.30 crore</p>
        </div>

        <div className="bg-[#9156F8] px-6 py-4 rounded-xl shadow-md text-center">
          <p className="text-sm opacity-90 font-medium">
            Access to mobile phones
          </p>
          <p className="text-2xl font-extrabold mt-1">› 5.3 crore</p>
        </div>
      </div>

      {/* Precise Curved Arrow */}
      <div className="my-6">
        <svg
          width="80"
          height="50"
          viewBox="0 0 80 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Curved Line */}
          <path
            d="M10 10 C 30 50, 50 10, 70 40"
            stroke="black"
            strokeWidth="3"
            fill="none"
          />
          {/* Arrowhead */}
          <path
            d="M67 37 L75 40 L67 43"
            stroke="black"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>

      {/* Section Below */}
      <h2 className="text-3xl font-extrabold text-[#2600FC] mb-4">
        What are we on?
      </h2>

      <div className="bg-[#6200EA] text-white text-sm leading-relaxed px-6 py-4 rounded-xl shadow-md max-w-lg text-center">
        We are on a mission to reach this <strong>83% MSME’s</strong> —
        approximately <strong>5.3 crore</strong> micro, small, and medium
        enterprises with our streamlined, smooth, dynamic application. It helps
        in managing their inventory, billing, expenses, and much more.
      </div>
    </section>
  );
};

export default MarketStats;
