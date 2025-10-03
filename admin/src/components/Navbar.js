import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // icons from react-icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <h1 className="text-xl font-bold text-blue-400 cursor-pointer">
          GoShop Admin
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li className="hover:text-blue-400 cursor-pointer">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="hover:text-blue-400 cursor-pointer">
            <Link to="/list">Products</Link>
          </li>
          <li className="hover:text-blue-400 cursor-pointer">
            <Link to="/orders">Orders</Link>
          </li>
          <li className="hover:text-blue-400 cursor-pointer">
            <Link to="/users">Users</Link>
          </li>
        </ul>

        {/* Profile Image */}
        <img
          className="rounded-full w-10 h-10 border-2 border-blue-400 hidden md:block"
          src="https://media.istockphoto.com/id/2201717839/photo/female-healthcare-worker-taking-notes-while-using-a-phone-in-a-modern-medical-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=h9Z3io6i3CTcpBi0THCJH56Q16u5jBcT2U-q1lNmsVY="
          alt="profile"
        />

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          {isOpen ? (
            <FiX
              className="w-6 h-6 cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="w-6 h-6 cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 shadow-lg">
          <ul className="flex flex-col space-y-4 py-4 px-6 font-medium">
            <li className="hover:text-blue-400 cursor-pointer">
              <Link to="/">Dashboard</Link>
            </li>
            <li className="hover:text-blue-400 cursor-pointer">
              <Link to="/list">Products</Link>
            </li>
            <li className="hover:text-blue-400 cursor-pointer">
              <Link to="/orders">Orders</Link>
            </li>
            <li className="hover:text-blue-400 cursor-pointer">
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
