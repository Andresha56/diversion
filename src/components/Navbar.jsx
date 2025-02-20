import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-40 py-4 pt-4  inset-0  bg-opacity-60 text-white">
      <h1 className="text-xl font-bold">StoreEdge</h1>
      <button className="bg-white text-[#1a0b37] px-4 py-2 rounded-lg">
        SignUp
      </button>
    </nav>
  );
};

export default Navbar;
