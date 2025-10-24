import React, { useState, useContext } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { StoreContext } from "../context/StoreContext";

const Contact = () => {
  const { url } = useContext(StoreContext);
  const [data, setData] = useState({
    name: "",
    email: "",
    inquiry: "",
  });

  const handleEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/api/contact/send`, data);
      toast.success(response.data.message);
      setData({ name: "", email: "", inquiry: "" });
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-50 via-rose-100 to-red-200 px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-red-700 mb-6 text-center">
        Do you have any inquiry? <br /> Kindly send us a message!
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-2xl rounded-2xl p-6 md:p-10 space-y-5 border border-red-100"
      >
        <input
          onChange={handleEvent}
          name="name"
          type="text"
          placeholder="Your Name"
          value={data.name}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <input
          onChange={handleEvent}
          name="email"
          type="email"
          placeholder="Your Email"
          value={data.email}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <textarea
          rows="6"
          onChange={handleEvent}
          name="inquiry"
          placeholder="Your Inquiry"
          value={data.inquiry}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 resize-none"
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-red-600 to-rose-700 text-white font-semibold rounded-lg shadow-md hover:from-red-700 hover:to-rose-800 transition-transform transform hover:scale-105"
        >
          Send Message ✉️
        </button>
      </form>
    </div>
  );
};

export default Contact;
