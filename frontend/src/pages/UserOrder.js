import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const UserOrder = () => {
  const { orders, setRefreshFlag } = useContext(StoreContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-10 px-6">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10 tracking-tight">
        Your Orders
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {orders.length > 0 ? (
          orders.map((order, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              {/* Order Info */}
              <div className="border-b border-gray-200 pb-3 mb-4">
                <h3 className="font-semibold text-gray-800 text-lg">
                  {order.address.firstName}
                </h3>
                <p className="text-sm text-gray-500">{order.address.email}</p>
                <p className="text-sm text-gray-500">
                  {order.address.city}, {order.address.country}
                </p>
                <p className="text-xs text-purple-600 mt-1">
                  📅{" "}
                  {new Date(order.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>

              {/* Items */}
              <div className="space-y-2">
                {order.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded-md border border-gray-100"
                  >
                    <p className="text-gray-700 font-medium truncate">
                      {item.name}
                    </p>
                    <p className="text-gray-500 text-sm">x{item.quantity}</p>
                  </div>
                ))}
              </div>

              {/* Footer: Status + Total */}
              <div className="mt-5 flex justify-between items-center">
                <div className="flex flex-col">
                  <span
                    className={`text-sm font-semibold mb-1 ${
                      order.status === "Delivered"
                        ? "text-green-600"
                        : order.status === "Order Processing"
                        ? "text-yellow-500"
                        : "text-blue-600"
                    }`}
                  >
                    {order.status}
                  </span>
                  <button
                    onClick={() => setRefreshFlag((prev) => !prev)}
                    className="text-sm bg-purple-600 text-white py-1 px-3 rounded-md hover:bg-purple-700 transition"
                  >
                    Track Order
                  </button>
                </div>

                <div className="text-right">
                  <span className="text-sm text-gray-500 block">Total</span>
                  <span className="text-green-600 font-bold text-lg">
                    ${order.amount}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500 text-lg">
            You don’t have any orders yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default UserOrder;
