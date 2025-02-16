import React from "react";

const FeatureSections = () => {
  const features = [
    {
      name: "InventoryEdge",
      desc: "Manage inventory effortlessly",
      img: "/images/inventory.png",
    },
    {
      name: "DuplicateCheck",
      desc: "Remove duplicate records",
      img: "/images/duplicate.png",
    },
    {
      name: "BillEdge",
      desc: "Automate your billing system",
      img: "/images/bill.png",
    },
  ];

  return (
    <section className="py-12 px-6 bg-white">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center text-center md:text-left mb-12"
        >
          <img src={feature.img} alt={feature.name} className="w-1/3" />
          <div className="md:ml-6">
            <h3 className="text-2xl font-bold">{feature.name}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeatureSections;
