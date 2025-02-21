import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const BillEdge = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-start h-[70vh] overflow-hidden px-8 
      bg-gradient-to-b from-[#A38CE5] via-[#6A41E5] to-[#A38CE5]"
    >
      {/* Title at the Top */}
      <motion.h1
        className="text-white text-5xl font-extrabold mt-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <span className="text-white">bill</span>
        <span className="font-extrabold">Edge</span>
      </motion.h1>

      {/* Grid Layout for Image & Text */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center w-full max-w-6xl mt-10">
        {/* Floating Phone Image */}
        <motion.div
          className="md:col-span-2 flex justify-center relative"
          initial={{ y: 10 }}
          animate={isInView ? { y: -10 } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <img
            src="/bill-edge.png" // Ensure this is in the public folder
            alt="Bill Mockup"
            className="w-[450px] md:w-[500px] drop-shadow-2xl rotate-[10deg]"
          />
        </motion.div>

        {/* Right Side Text */}
        <motion.div
          className="text-right text-lg md:text-3xl font-semibold text-white md:mr-16"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p>
            Manage <br /> billing <br /> seamlessly
          </p>
        </motion.div>
      </div>

      {/* Floating Cube Decoration */}
      <motion.div
        className="absolute bottom-10 right-10 w-12 h-12 bg-blue-400 opacity-50 transform rotate-12"
        initial={{ y: -20 }}
        animate={isInView ? { y: 20 } : {}}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>
    </section>
  );
};

export default BillEdge;
