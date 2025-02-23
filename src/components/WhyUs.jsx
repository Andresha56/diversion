import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WhyUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once when in view
    threshold: 0.2, // Triggers when 20% of the component is in view
  });

  const features = [
    {
      title: "Manage Inventory",
      image: "/manage-inventory.png",
      delay: 0.2,
    },
    {
      title: "Manage Expenses",
      image: "/manage-expenses.png",
      delay: 0.4,
    },
    {
      title: "Manage Billing",
      image: "/manage-billing.png",
      delay: 0.6,
    },
  ];

  return (
    <section
      ref={ref}
      className="h-[80vh] flex flex-col items-center justify-center text-center mb-20 mt-20"
    >
      {/* Title */}
      <h1 className="text-4xl font-custom text-purple-800 mb-10">Why Us?</h1>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white p-5 rounded-lg shadow-lg w-[250px] md:w-[400px] cursor-pointer overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }} // No hover delay
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full rounded-md"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
