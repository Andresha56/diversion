import React from "react";

const MarketStats = () => {
  return (
    <section className="flex flex-col items-center justify-center py-12 px-6 relative">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-[#1a0b37] mb-6">The market</h2>

      {/* Market Stats Grid */}
      <div className="grid grid-cols-2 gap-2 md:gap-4 bg-white p-4 rounded-lg relative">
        {/* Left Column */}
        <div className="bg-[#3e1b87] text-white p-4 text-center rounded-lg col-span-1 row-span-2 flex flex-col justify-center">
          <p className="text-sm font-medium">MSME's using computers</p>
          <h3 className="text-2xl font-bold">77 lakhs</h3>
        </div>

        {/* Top Right Box */}
        <div className="bg-white border-2 border-[#3e1b87] text-[#1a0b37] p-4 text-center rounded-lg flex flex-col justify-center">
          <p className="text-sm font-medium">Total MSME's in India</p>
          <h3 className="text-xl font-bold">6.30 crore</h3>
        </div>

        {/* Bottom Right Box */}
        <div className="bg-white border-2 border-[#3e1b87] text-[#1a0b37] p-4 text-center rounded-lg flex flex-col justify-center">
          <p className="text-sm font-medium">Access to mobile phones</p>
          <h3 className="text-xl font-bold">5.3 crore</h3>
        </div>

        {/* Bottom Left Box */}
        <div className="bg-[#3e1b87] text-white p-4 text-center rounded-lg col-span-1 flex flex-col justify-center">
          <p className="text-sm font-medium">Percentage</p>
          <h3 className="text-2xl font-bold">83%</h3>
        </div>

        {/* Arrow between market stats and "What are we on?" section */}
        <svg
          className="absolute left-1/2 -bottom-8 transform -translate-x-1/2"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25 0 V30 M25 30 L15 20 M25 30 L35 20"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* What are we on? Section */}
      <div className="bg-[#3e1b87] text-white p-6 text-center rounded-lg mt-12 max-w-lg">
        <h2 className="text-2xl font-bold mb-4">What are we on?</h2>
        <p className="text-sm leading-relaxed">
          We are on a mission to reach this <b>83%</b> MSME’s—approximately{" "}
          <b>5.3 crore</b> micro, small, and medium enterprises. Our
          streamlined, smooth, and dynamic application features a **minimal user
          interface** to help manage inventory, billing, expenses, and much
          more.
        </p>
      </div>
    </section>
  );
};

export default MarketStats;
