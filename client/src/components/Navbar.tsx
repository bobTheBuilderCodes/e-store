import React, { useState } from "react";
import { FiSearch, FiMenu, FiX, FiUser, FiPlusCircle } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/891/891462.png"
            alt="logo"
            className="w-8 h-8"
          />
          <span className="text-xl font-bold text-gray-800">e-store</span>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center w-1/2 bg-gray-100 rounded-lg px-3 py-2">
          <FiSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search for products, services..."
            className="bg-transparent flex-1 outline-none text-sm"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
            <FiUser className="mr-1" /> Login / Register
          </button>

          <button className="hidden font-black bg-green-600 md:flex items-center text-white text-sm px-4 py-2 rounded-lg hover:bg-green-700 transition">
            <FiPlusCircle className="mr-1" /> Sell
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-gray-700"
          >
            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden px-4 pb-3">
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
          <FiSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent flex-1 outline-none text-sm"
          />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-2 space-y-1">
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 font-medium hover:bg-gray-50"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 font-medium hover:bg-gray-50"
          >
            Categories
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 font-medium hover:bg-gray-50"
          >
            My Account
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 font-medium hover:bg-gray-50"
          >
            Help Center
          </a>
          <button className="block w-full text-left px-4 py-2 text-white bg-green-600 rounded-lg font-medium hover:bg-green-700">
            <FiPlusCircle className="inline mr-1" /> Sell
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
