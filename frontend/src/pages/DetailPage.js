import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import { ShoppingCart } from "lucide-react";

const DetailPage = () => {
  const { url, addToCart } = useContext(StoreContext);
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${url}/api/product/list/${id}`);
        if (res.data.success) {
          setProduct(res.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [url, id]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-2xl overflow-hidden grid md:grid-cols-2 gap-8 p-6">
        {/* Product Image */}
        <div className="flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden">
          {product.image ? (
            <img
              src={`${url}/images/${product.image}`}
              alt={product.name}
              className="object-contain w-full h-96 transition-transform duration-300 hover:scale-105"
            />
          ) : (
            <div className="text-gray-400 italic">No image available</div>
          )}
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-3">
              {product.name || "Loading..."}
            </h1>
            <p className="text-gray-500 font-semibold mb-4 whitespace-pre-line leading-relaxed">
              {product.description || "No description available."}
            </p>

            <div className="flex items-center justify-between mb-6">
              <span className="text-3xl font-bold text-gray-900">
                ${product.price}
              </span>
              {product.ratings && (
                <span className="text-yellow-500 text-sm font-medium">
                  ⭐ {product.ratings.toFixed(1)}
                </span>
              )}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(product._id)}
            className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-all duration-300"
          >
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
