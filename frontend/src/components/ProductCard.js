import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import {useNavigate} from 'react-router-dom'

const ProductCard = ({ name, price, description, image, ratings, id }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const navigate=useNavigate()

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 max-w-sm w-full flex flex-col hover:-translate-y-1">
      {/* Product Image */}
      <img
        onClick={()=>navigate(`/detail/${id}`)} 
        src={image}
        alt={name}
        className="h-48 w-full object-cover"
      />

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-grow">
        <h1 className="text-lg font-semibold text-gray-800 truncate">{name}</h1>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{description}</p>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-800">${price}</span>
          <span className="text-yellow-500 text-sm">⭐ {ratings}</span>
        </div>

        {/* Cart Buttons */}
        <div className="mt-4">
          {!cartItems[id] ? (
            <button
              onClick={() => addToCart(id)}
              className="w-full bg-red-600 text-white py-2 px-4 rounded-xl hover:bg-red-700 transition-colors"
            >
              Add to Cart
            </button>
          ) : (
            <div className="flex items-center justify-between bg-gray-100 rounded-xl p-2">
              <button
                onClick={() => removeFromCart(id)}
                className="bg-red-600 text-white w-10 h-10 rounded-full hover:bg-red-700 transition"
              >
                −
              </button>
              <p className="text-lg font-semibold text-gray-700">
                {cartItems[id]}
              </p>
              <button
                onClick={() => addToCart(id)}
                className="bg-red-600 text-white w-10 h-10 rounded-full hover:bg-red-700 transition"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
