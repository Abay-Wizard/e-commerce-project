import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 text-sm py-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left - Brand */}
        <p className="text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="text-red-500 font-semibold">GoShop Admin</span>. All rights reserved.
        </p>

        {/* Right - Links */}
        <div className="flex space-x-6 text-gray-400">
          <span className="hover:text-red-500 cursor-pointer transition-colors">
            Privacy
          </span>
          <span className="hover:text-red-500 cursor-pointer transition-colors">
            Terms
          </span>
          <span className="hover:text-red-500 cursor-pointer transition-colors">
            Contact
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
