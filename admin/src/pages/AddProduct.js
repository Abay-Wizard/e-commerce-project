import React, { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import { toast } from "react-hot-toast";
import axios from "axios";
import upload from "../assets/upload.jpg";

const AddProduct = () => {
  const { url,setRefreshFlag } = useContext(StoreContext);
  const [data, setData] = useState({
    name: "",
    image: null,
    price: "",
    description: "",
    category: "",
    ratings: "",
  });
  const [preview, setPreview] = useState(null);

  const handleEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    setData({ ...data, image: file });

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("image", data.image);
      formData.append("price", data.price);
      formData.append("description", data.description);
      formData.append("category", data.category);
      formData.append("ratings", data.ratings);

      const res = await axios.post(`${url}/api/product/add`, formData);
      if (res.data.success) {
        toast.success(res.data.message);
        setData({
          name: "",
          image: null,
          price: "",
          description: "",
          category: "",
          ratings: "",
        });
        setPreview(null);
        setRefreshFlag(prev=>!prev)
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Upload Your Product
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
          {/* Image Upload */}
          <label
            htmlFor="image"
            className="cursor-pointer flex flex-col items-center hover:scale-105 transition-transform"
          >
            <img
              src={preview || upload}
              alt="preview"
              className="w-40 h-40 object-cover rounded-xl border-2 border-dashed border-gray-300 mb-3 shadow-sm"
            />
            <span className="text-gray-500 text-sm hover:text-gray-700 transition">
              Click to select an image
            </span>
          </label>
          <input
            onChange={handleUpload}
            name="image"
            type="file"
            id="image"
            accept="image/*"
            required
            hidden
          />

          {/* Product Inputs */}
          <input
            onChange={handleEvent}
            name="name"
            type="text"
            placeholder="Product Name"
            value={data.name}
            required
            className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
          />

          <textarea
            onChange={handleEvent}
            name="description"
            type="text"
            placeholder="Description"
            value={data.description}
            required
            rows="4"
            className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm resize-none"
          />

          <input
            onChange={handleEvent}
            name="price"
            type="text"
            placeholder="Price"
            value={data.price}
            required
            className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
          />

          <input
            onChange={handleEvent}
            name="ratings"
            type="text"
            placeholder="Ratings"
            value={data.ratings}
            required
            className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
          />

          <select
            onChange={handleEvent}
            value={data.category}
            name="category"
            required
            className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
          >
            <option value="">Select Category</option>
            <option>Electronics</option>
            <option>Shoes</option>
            <option>T-shirts</option>
            <option>Gifts</option>
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
