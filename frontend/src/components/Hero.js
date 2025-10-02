import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate=useNavigate()
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-24 py-12 bg-gradient-to-r from-purple-50 to-white">
      {/* Text Section */}
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Shop Smarter, Live Better
        </h1>
        <p className="text-gray-600 mb-8">
          Looking for a smarter way to shop? Welcome to the ultimate online
          marketplace where convenience meets variety. From the latest
          electronics to stylish shoes and everyday essentials, everything you
          need is just a click away. Enjoy a seamless shopping experience with
          secure payments and fast delivery right to your doorstep.
        </p>
        <button onClick={()=>navigate('/shop')} className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition">
          Start Shopping
        </button>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <img
          src="https://cdn.dribbble.com/userupload/11084676/file/original-9c2614f18b744c4a65801282cecc89cb.png?format=webp&resize=600x400&vertical=center"
          alt="hero"
          className="rounded-2xl shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
