import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-white py-12 px-8 text-black overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#5044FC]">StoreEdge</h2>
          <p className="mt-4 text-sm">Made with ❤️ by team devolt</p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold text-lg">Company</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li className="hover:text-[#5044FC]">
              <a href="#">About us</a>
            </li>
            <li className="hover:text-[#5044FC]">
              <a href="#">Terms of use</a>
            </li>
            <li className="hover:text-[#5044FC]">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="hover:text-[#5044FC]">
              <a href="#">Corporate Information</a>
            </li>
            <li className="hover:text-[#5044FC]">
              <a href="#">Lending Partners</a>
            </li>
          </ul>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="font-semibold text-lg">Product</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li className="hover:text-[#5044FC]">
              <a href="#">Product Overview</a>
            </li>
            <li className="hover:text-[#5044FC]">
              <a href="#">inventoryEdge</a>
            </li>
            <li className="hover:text-[#5044FC]">
              <a href="#">expenseEdge</a>
            </li>
            <li className="hover:text-[#5044FC]">
              <a href="#">billEdge</a>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="font-semibold text-lg">Support</h3>
          <p className="mt-3 text-sm text-gray-600">
            Get Answers and Assistance Right Where You Need It
          </p>
          <p className="mt-2 text-sm flex items-center">
            📧{" "}
            <a
              href="mailto:support@finjymc.com"
              className="ml-1 hover:text-[#5044FC]"
            >
              support@finjymc.com
            </a>
          </p>
        </div>
      </div>

      {/* Social Media + Address */}
      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-[#5044FC] text-lg">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-600 hover:text-[#5044FC] text-lg">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-600 hover:text-[#5044FC] text-lg">
            <FaFacebookF />
          </a>
          <a href="#" className="text-gray-600 hover:text-[#5044FC] text-lg">
            <FaLinkedinIn />
          </a>
        </div>

        {/* Address */}
        <div className="text-center md:text-right ">
          <p>Tollygunge</p>
          <p>Kolkata</p>
          <p>West Bengal</p>
          <p>Kolkata - West Bengal - 700033</p>
        </div>
      </div>

      {/* Large "StoreEdge" Transparent Text with Cut Effect */}
      <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 text-[8rem] font-bold text-gray-200 opacity-50 select-none cut-text ">
        StoreEdge
      </div>
    </footer>
  );
};

export default Footer;
