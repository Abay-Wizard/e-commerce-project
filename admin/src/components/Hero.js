import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center bg-gray-50">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
        Welcome to the{" "}
        <span className="text-red-600">GoShop Admin Panel</span>
      </h1>

      {/* Description */}
      <p className="text-gray-600 max-w-2xl mb-8 leading-relaxed">
        Manage your store with ease. Add new products, monitor orders,
        and keep track of your inventory. Everything you need is right here.
      </p>

      {/* Illustration */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/711/711284.png"
        alt="admin illustration"
        className="w-40 h-40 mb-8 opacity-90 hover:opacity-100 transition-opacity duration-300"
      />

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => navigate("/add")}
          className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition-all transform hover:-translate-y-1"
        >
          ➕ Add Product
        </button>
        <button
          onClick={() => navigate("/orders")}
          className="bg-white border border-red-600 text-red-600 px-6 py-3 rounded-lg shadow-sm hover:bg-red-50 transition-all transform hover:-translate-y-1"
        >
          📦 Track Orders
        </button>
        <button
          onClick={() => navigate("/list")}
          className="bg-gray-900 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 transition-all transform hover:-translate-y-1"
        >
          📋 View Products
        </button>
      </div>
    </section>
  );
};

export default Hero;
