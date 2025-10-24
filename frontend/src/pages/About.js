import React from "react";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-12 max-w-6xl mx-auto">
      {/* Logo Section */}
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-4xl md:text-5xl text-red-600 animate-pulse">
          GoShop
        </h1>
      </div>

      {/* Text Section */}
      <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-2xl transition-all duration-700 ease-in-out">
        Welcome to <span className="font-bold text-red-500">GoShop</span>, your
        one-stop destination for quality products at affordable prices. We
        believe shopping should be simple, fun, and accessible for everyone.
        That’s why we bring together a wide variety of goods from the latest
        electronics and trendy shoes to everyday essentials and thoughtful
        gifts all in one place. Our mission is to connect customers with
        products they love, while providing a secure and seamless shopping
        experience. At GoShop, we value trust, convenience, and customer
        satisfaction above all else. Shop with us today and discover how easy
        online shopping can truly be.
      </p>
    </div>
  );
};

export default About;
