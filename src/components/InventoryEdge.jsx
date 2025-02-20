import React from "react";
import { motion } from "framer-motion";

const InventoryEdge = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-[70vh] bg-gradient-to-b from-[#8461E9] to-[#3A1BB5] overflow-hidden px-8">
      {/* Title at the Top */}
      <motion.h1
        className="text-white text-4xl font-extrabold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="text-white">inventory</span>
        <span className="font-extrabold">Edge</span>
      </motion.h1>

      {/* Grid Layout for Phone & Text */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full max-w-5xl">
        {/* Floating Phone Mockup */}
        <motion.div
          className="flex justify-center"
          initial={{ y: 10 }}
          animate={{ y: -10 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <img
            src="/mobile-mockup.png"
            alt="Phone Mockup"
            className="w-[220px] md:w-[260px] drop-shadow-2xl"
          />
        </motion.div>

        {/* Text beside the Phone */}
        <motion.div
          className="text-white text-lg md:text-2xl font-semibold text-right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p>
            Manage <br /> inventory seamlessly
          </p>
        </motion.div>
      </div>

      {/* Floating Cubes */}
      <motion.div
        className="absolute top-10 left-10 w-6 h-6 bg-purple-400 opacity-50 transform rotate-12"
        initial={{ y: -20 }}
        animate={{ y: 20 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>

      <motion.div
        className="absolute bottom-10 right-10 w-8 h-8 bg-purple-600 opacity-40 transform rotate-12"
        initial={{ y: 15 }}
        animate={{ y: -15 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>
    </section>
  );
};

export default InventoryEdge;
