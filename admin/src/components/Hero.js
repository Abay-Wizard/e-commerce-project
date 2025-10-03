import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to the <span className="text-blue-600">Admin Panel</span>
      </h1>

      {/* Description */}
      <p className="text-gray-600 max-w-2xl mb-6">
        This is where you can manage your shop: add new products, track orders, 
        and view the list of items you have added. Use the buttons below to 
        navigate to different sections of your dashboard.
      </p>

      {/* Illustration (optional placeholder) */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/711/711284.png"
        alt="admin illustration"
        className="w-40 h-40 mb-6 opacity-80"
      />

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => navigate("/add")}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          ➕ Add Product
        </button>
        <button
          onClick={() => navigate("/track")}
          className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition"
        >
          📦 Track Orders
        </button>
        <button
          onClick={() => navigate("/list")}
          className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-900 transition"
        >
          📋 List of Products
        </button>
      </div>
    </div>
  );
};

export default Hero;
