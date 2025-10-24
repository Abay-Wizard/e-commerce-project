import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold text-red-600 tracking-tight cursor-pointer">
          GoShop <span className="text-gray-700">Admin</span>
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-red-600 transition-colors duration-200"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/list"
              className="hover:text-red-600 transition-colors duration-200"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              className="hover:text-red-600 transition-colors duration-200"
            >
              Orders
            </Link>
          </li>
          <li>
            <Link
              to="/users"
              className="hover:text-red-600 transition-colors duration-200"
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              to="/inquiries"
              className="hover:text-red-600 transition-colors duration-200"
            >
              Inquiries
            </Link>
          </li>
        </ul>

        {/* Profile Image */}
        <img
          className="rounded-full w-10 h-10 border-2 border-red-500 hidden md:block object-cover"
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="profile"
        />

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          {isOpen ? (
            <FiX
              className="w-7 h-7 text-gray-700 cursor-pointer transition-transform transform hover:scale-110"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="w-7 h-7 text-gray-700 cursor-pointer transition-transform transform hover:scale-110"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <ul className="flex flex-col space-y-3 py-4 px-6 font-medium text-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 hover:text-red-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/list"
                className="block py-2 hover:text-red-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/orders"
                className="block py-2 hover:text-red-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Orders
              </Link>
            </li>
            <li>
              <Link
                to="/users"
                className="block py-2 hover:text-red-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Users
              </Link>
            </li>
            <li>
              <Link
                to="/inquiries"
                className="block py-2 hover:text-red-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Inquiries
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
