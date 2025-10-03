import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm py-4 mt-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left - Brand */}
        <p className="mb-2 md:mb-0">
          © {new Date().getFullYear()} GoShop Admin. All rights reserved.
        </p>

        {/* Right - Minimal Options */}
        <div className="flex space-x-4">
          <span className="hover:text-white cursor-pointer transition">
            Privacy
          </span>
          <span className="hover:text-white cursor-pointer transition">
            Terms
          </span>
          <span className="hover:text-white cursor-pointer transition">
            Contact
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
