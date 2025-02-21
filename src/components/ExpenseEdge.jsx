import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ExpenseEdge = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-start h-[80vh] overflow-hidden px-8 
      bg-gradient-to-t from-[#ffffff] via-[#e7e4eb] to-[#776dda]"
    >
      {/* Title at the Top - Stays Centered */}
      <motion.h1
        className="text-white text-5xl font-custom mt-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <span className="text-white">expense</span>
        <span>Edge</span>
      </motion.h1>

      {/* Wrapped Content in a Shifted Div */}
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center w-full max-w-6xl mt-16 ml-48">
          {/* Left Side Text */}
          <motion.div
            className="text-left text-lg md:text-3xl font-semibold text-[#3C137E] md:ml-16"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="font-custom">
              Manage <br /> expenses <br /> seamlessly
            </p>
          </motion.div>

          {/* Floating Image - Coming from Right */}
          <motion.div
            className="md:col-span-2 flex justify-center relative"
            initial={{ x: 100, opacity: 0, y: 10 }} // Start off-screen to the right
            animate={isInView ? { x: 0, opacity: 1, y: -10 } : {}} // Slide in & float
            transition={{
              duration: 1.5, // Smooth entry
              ease: "easeOut",
            }}
            whileHover={{ scale: 1.05 }} // Optional hover effect
          >
            <img
              src="/expense-edge.png" // Ensure this is in the public folder
              alt="Expense Mockup"
              className="w-[800px] md:w-[800px] drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Floating Cube Decoration */}
      <motion.div
        className="absolute bottom-10 left-10 w-12 h-12 bg-blue-400 opacity-50 transform rotate-12"
        initial={{ y: -20 }}
        animate={isInView ? { y: 20 } : {}}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>
    </section>
  );
};

export default ExpenseEdge;
