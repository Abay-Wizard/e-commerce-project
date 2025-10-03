import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { FaTrash } from "react-icons/fa";

const ListProduct = () => {
  const { products, deleteProduct, url } = useContext(StoreContext);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <h1 className="text-2xl font-bold text-gray-800 px-6 py-4 border-b">
          Product List
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-left">
                <th className="p-4">#</th>
                <th className="p-4">Image</th>
                <th className="p-4">Name</th>
                <th className="p-4">Description</th>
                <th className="p-4">Price</th>
                <th className="p-4">Ratings</th>
                <th className="p-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 ? (
                products.map((product, index) => (
                  <tr
                    key={product._id}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="p-4">{index + 1}</td>
                    <td className="p-4">
                      <img
                        src={`${url}/images/${product.image}`}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-lg shadow-sm"
                      />
                    </td>
                    <td className="p-4 font-semibold text-gray-800">
                      {product.name}
                    </td>
                    <td className="p-4 text-gray-600 max-w-xs truncate">
                      {product.description}
                    </td>
                    <td className="p-4 font-medium text-blue-600">
                      ${product.price}
                    </td>
                    <td className="p-4">{product.ratings}⭐</td>
                    <td className="p-4 text-center">
                      <button
                        onClick={() => deleteProduct(product._id)}
                        className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition"
                      >
                        <FaTrash size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="p-6 text-center text-gray-500 italic"
                  >
                    No products available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
