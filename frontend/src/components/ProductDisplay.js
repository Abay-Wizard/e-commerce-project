import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { StoreContext } from "../context/StoreContext";

const ProductDisplay = () => {
  const { url, products } = useContext(StoreContext);

  return (
    <div className="py-12 bg-gray-50 min-h-screen flex flex-col items-center">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Our Products
      </h2>

      {/* Product Grid Container */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
        {products.map((product, index) => (
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
  );
};

export default ProductDisplay;
