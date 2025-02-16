import React from "react";

const Footer = () => {
  return (
    <footer className="text-center py-6 bg-[#1a0b37] text-white">
      <h2 className="text-2xl font-bold">StoreEdge</h2>
      <p>© {new Date().getFullYear()} StoreEdge. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
