import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import { IoClose } from "react-icons/io5";

const Cart = () => {
  const {
    cartItems,
    url,
    products,
    removeFromCart,
    getTotalCart,
    getTotalPrice,
  } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <h1 className="text-3xl font-bold text-gray-800 px-6 py-4 border-b">
          Your Shopping Cart
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm sm:text-base">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-left">
                <th className="p-4">#</th>
                <th className="p-4">Product</th>
                <th className="p-4">Description</th>
                <th className="p-4 text-center">Price</th>
                <th className="p-4 text-center">Quantity</th>
                <th className="p-4 text-center">Total</th>
                <th className="p-4 text-center">Remove</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product, index) => {
                if (cartItems[product._id] > 0) {
                  return (
                    <tr
                      key={index}
                      className="border-t hover:bg-gray-50 transition"
                    >
                      <td className="p-4">{index + 1}</td>

                      <td className="p-4 font-semibold text-gray-800 flex items-center gap-3">
                        <img
                          src={`${url}/images/${product.image}`}
                          alt={product.name}
                          className="w-14 h-14 object-cover rounded-md shadow-sm"
                        />
                        {product.name}
                      </td>

                      <td className="p-4 text-gray-600 max-w-xs truncate">
                        {product.description}
                      </td>

                      <td className="p-4 text-center font-medium text-blue-600">
                        ${product.price}
                      </td>

                      <td className="p-4 text-center">
                        {cartItems[product._id]}
                      </td>

                      <td className="p-4 text-center font-semibold text-gray-800">
                        ${(product.price * cartItems[product._id]).toFixed(2)}
                      </td>

                      <td className="p-4 text-center">
                        <button
                          onClick={() => removeFromCart(product._id)}
                          className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition"
                        >
                          <IoClose size={18} />
                        </button>
                      </td>
                    </tr>
                  );
                } else {
                  return null;
                }
              })}
            </tbody>
          </table>
        </div>

        {/* Summary Section */}
        <div className="p-6 border-t bg-gray-50 flex flex-col sm:flex-row justify-between gap-6">
          <div className="text-gray-700 space-y-2">
            <p className="text-lg font-medium">
              Delivery Charges: <span className="font-semibold">$4</span>
            </p>
            <p className="text-lg font-medium">
              Total Items:{" "}
              <span className="font-semibold">{getTotalCart()}</span>
            </p>
            <p className="text-lg font-medium">
              Total Price:{" "}
              <span className="text-blue-600 font-bold">
                ${(getTotalPrice() + 4).toFixed(2)}
              </span>
            </p>
          </div>

          <button
            onClick={
              getTotalCart() > 0
                ? () => navigate("/placeOrder")
                : () => navigate("/cart")
            }
            className={`px-6 py-3 rounded-md font-semibold text-white transition ${
              getTotalCart() > 0
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
