import React from "react";
import { motion } from "framer-motion";

const ExpenseEdge = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-start h-[70vh] overflow-hidden px-8 
      bg-gradient-to-t from-[#ffffff] via-[#e7e4eb] to-[#776dda]"
    >
      {/* Title at the Top */}
      <motion.h1
        className="text-white text-5xl font-extrabold mt-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="text-white">expense</span>
        <span className="font-extrabold">Edge</span>
      </motion.h1>

      {/* Grid Layout for Text & Image */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center w-full max-w-6xl mt-10">
        {/* Left Side Text */}
        <motion.div
          className="text-left text-lg md:text-3xl font-semibold text-[#3C137E] md:ml-16"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p>
            Manage <br /> expenses <br /> seamlessly
          </p>
        </motion.div>

        {/* Floating Image - Spanning 2 Columns */}
        <motion.div
          className="md:col-span-2 flex justify-center relative"
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
            src="/expense-edge.png" // Ensure this is in the public folder
            alt="Expense Mockup"
            className="w-[800px] md:w-[500px] drop-shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Floating Cube Decoration */}
      <motion.div
        className="absolute bottom-10 left-10 w-12 h-12 bg-blue-400 opacity-50 transform rotate-12"
        initial={{ y: -20 }}
        animate={{ y: 20 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>
    </section>
  );
};

export default ExpenseEdge;
