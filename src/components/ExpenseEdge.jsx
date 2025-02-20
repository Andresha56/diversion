import React from "react";
import { motion } from "framer-motion";

const ExpenseEdge = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center h-[70vh] overflow-hidden px-8
      bg-[linear-gradient(to_bottom,#F5F1FF,#9D7BEE,#5732B1)]"
    >
      {/* Title at the Top */}
      <motion.h1
        className="text-white text-4xl font-extrabold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="text-white">expense</span>
        <span className="font-extrabold">Edge</span>
      </motion.h1>

      {/* Grid Layout for Text & Image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full max-w-5xl">
        {/* Left Side Text */}
        <motion.div
          className="text-left text-lg md:text-2xl font-semibold text-[#4C1D95]"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p>
            Manage <br /> expenses seamlessly
          </p>
        </motion.div>

        {/* Floating Image Containing Both Screens */}
        <motion.img
          src="/expense-edge.png" // Ensure this is in the public folder
          alt="Expense Mockup"
          className="w-[300px] md:w-[350px] drop-shadow-2xl"
          initial={{ y: 10 }}
          animate={{ y: -10 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating Cube Decoration */}
      <motion.div
        className="absolute bottom-10 left-10 w-10 h-10 bg-blue-400 opacity-50 transform rotate-12"
        initial={{ y: -20 }}
        animate={{ y: 20 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>
    </section>
  );
};

export default ExpenseEdge;
