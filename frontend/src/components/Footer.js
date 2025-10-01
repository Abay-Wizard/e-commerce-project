import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold text-red-500 mb-4">GoShop</h1>
          <p className="text-gray-400">
            Your one-stop shop for electronics, shoes, fashion, and more. Enjoy fast delivery and secure shopping.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-red-500 transition">Home</a></li>
            <li><a href="/about" className="hover:text-red-500 transition">About</a></li>
            <li><a href="/contact" className="hover:text-red-500 transition">Contact</a></li>
            <li><a href="/signup" className="hover:text-red-500 transition">Sign Up</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Support</h2>
          <ul className="space-y-2">
            <li className="hover:text-red-500 transition"> Help Center </li>
            <li className="hover:text-red-500 transition"> Terms & Conditions </li>
            <li className="hover:text-red-500 transition"> Privacy Policy </li>
            <li className="hover:text-red-500 transition"> FAQs </li>
          </ul>
        </div>

        {/* Newsletter / Social */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Stay Connected</h2>
          <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest deals.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded-md text-gray-900 flex-grow"
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
              Subscribe
            </button>
          </form>
          <div className="flex gap-4 mt-6">
            <FaFacebookF className="cursor-pointer hover:text-red-500 transition" />
            <FaTwitter className="cursor-pointer hover:text-red-500 transition" />
            <FaInstagram className="cursor-pointer hover:text-red-500 transition" />
            <FaLinkedinIn className="cursor-pointer hover:text-red-500 transition" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} GoShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
