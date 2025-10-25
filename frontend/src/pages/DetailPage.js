import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";

const DetailPage = () => {
  const { url, addToCart } = useContext(StoreContext);
  const [product, setProduct] = useState({});
  const [viewIndex, setViewIndex] = useState(0);
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

  const views = [
    "scale-100 rotate-0 brightness-100", // normal
    "scale-110 rotate-1 brightness-105", // slightly zoomed & brighter
    "scale-100 -rotate-1 brightness-90", // tilted & darker
  ];

  const nextView = () =>
    setViewIndex((prev) => (prev + 1) % views.length);
  const prevView = () =>
    setViewIndex((prev) => (prev === 0 ? views.length - 1 : prev - 1));

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-2xl overflow-hidden grid md:grid-cols-2 gap-8 p-6">
        {/* Simulated multi-view image */}
        <div className="relative flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden">
          {product.image ? (
            <img
              src={`${url}/images/${product.image}`}
              alt={product.name}
              className={`object-contain w-full h-96 transition-all duration-500 ${views[viewIndex]}`}
            />
          ) : (
            <div className="text-gray-400 italic">No image available</div>
          )}

          {/* Navigation */}
          <button
            onClick={prevView}
            className="absolute left-3 bg-white/70 hover:bg-white p-2 rounded-full shadow-md transition"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextView}
            className="absolute right-3 bg-white/70 hover:bg-white p-2 rounded-full shadow-md transition"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 flex gap-2">
            {views.map((_, idx) => (
              <div
                key={idx}
                className={`w-2.5 h-2.5 rounded-full ${
                  idx === viewIndex ? "bg-red-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Product info */}
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

          {/* Add to Cart */}
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
