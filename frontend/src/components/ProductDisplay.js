import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { StoreContext } from "../context/StoreContext";

const ProductDisplay = () => {
  const { url, products } = useContext(StoreContext);
  const { searchText } = useContext(StoreContext)
  const { category, setCategory } = useContext(StoreContext)
  const filteredProducts = category ? products.filter(product => product.category === category) : products

  return (
    <div className="py-12 bg-gray-50 min-h-screen flex flex-col items-center">
      {/* Section Header */}
      <div className="w-full max-w-6xl flex flex-col sm:flex-row justify-between items-center mb-8 px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center sm:text-left mb-3">
          Our Products
        </h2>
        <p className="text-blue-600 bg-blue-50 border-l-4 border-blue-400 px-3 py-2 rounded-md text-sm sm:text-base italic">
  Click any product image to view full details and reviews.
</p>



        {/* Styled Select Filter */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 text-gray-700 rounded-lg px-4 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-200 cursor-pointer"
        >
          <option value="">All</option>
          <option value="Electronics">Electronics</option>
          <option value="T-shirts">T-shirts</option>
          <option value="Gifts">Gifts</option>
          <option value="Shoes">Shoes</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center cursor-pointer">
        {filteredProducts
          .filter((product) =>
            product.name.toLowerCase().trim().includes(searchText.trim().toLowerCase())
          )
          .map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              description={product.description}
              id={product._id}
              image={`${url}/images/${product.image}`}
              ratings={product.ratings}
              price={product.price}
            />
          ))}
      </div>
    </div>
  )
};

export default ProductDisplay;
