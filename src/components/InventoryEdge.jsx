import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const InventoryEdge = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-center h-[80vh] bg-gradient-to-b from-[#e0eaff] to-[#4506d8] overflow-hidden px-8"
    >
      {/* Title at the Top */}
      <motion.h1
        className="text-white font-custom text-4xl  mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <span className="text-white">inventory</span>
        <span className="font-custom">Edge</span>
      </motion.h1>

      {/* Grid Layout for Phone & Text */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full max-w-5xl">
        {/* Floating Phone Mockup - Enters from Left */}
        <motion.div
          className="flex justify-center"
          initial={{ x: -100, opacity: 0, y: 10 }} // Start off-screen to the left
          animate={isInView ? { x: 0, opacity: 1, y: -10 } : {}} // Slide in
          transition={{
            duration: 1.5, // Smooth entry
            ease: "easeOut",
          }}
          whileHover={{ scale: 1.05 }} // Optional hover effect
        >
          <img
            src="/mobile-mockup.png"
            alt="Phone Mockup"
            className="w-[220px] md:w-[600px] drop-shadow-2xl"
          />
        </motion.div>

        {/* Text beside the Phone */}
        <motion.div
          className="text-white text-lg md:text-2xl font-semibold text-right"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="font-custom">
            Manage <br /> inventory <br /> seamlessly
          </p>
        </motion.div>
      </div>

      {/* Floating Cubes */}
      <motion.div
        className="absolute top-10 left-10 w-6 h-6 bg-purple-400 opacity-50 transform rotate-12"
        initial={{ y: -20 }}
        animate={isInView ? { y: 20 } : {}}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>

      <motion.div
        className="absolute bottom-10 right-10 w-8 h-8 bg-purple-600 opacity-40 transform rotate-12"
        initial={{ y: 15 }}
        animate={isInView ? { y: -15 } : {}}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>
    </section>
  );
};

export default InventoryEdge;
