import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className=" top-0 left-0 w-full flex justify-between items-center px-40 py-4 text-white z-50">
      {/* Logo - Sliding in from Left with Hover Effect */}
      <motion.h1
        className="text-xl font-custom cursor-pointer"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.1, color: "#f8f8ff" }}
        whileTap={{ scale: 0.95 }}
      >
        StoreEdge
      </motion.h1>

      {/* SignUp Button - Sliding in from Right with Instant Box Shadow Hover Effect */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Link to="/login">
          <motion.button
            className="bg-white text-[#1a0b37] px-5 py-2 rounded-lg font-medium transition-all"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.6)",
              transition: { duration: 0 }, // Instant hover effect
            }}
            whileTap={{ scale: 0.95 }}
          >
            SignUp
          </motion.button>
        </Link>
      </motion.div>
    </nav>
  );
};

export default Navbar;
