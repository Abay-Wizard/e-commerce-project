import React, { useContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { StoreContext } from "../context/StoreContext";

const PlaceOrder = () => {
  const { url, products, cartItems, getTotalPrice, token } =
    useContext(StoreContext);
  let items = [];
  const amount = (getTotalPrice() + 4).toFixed(2);
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    zipcode: "",
    city: "",
    state: "",
    country: "",
  });

  products.forEach((item) => {
    if (cartItems[item._id] > 0) {
      let orderItem = { ...item };
      orderItem.quantity = cartItems[item._id];
      items.push(orderItem);
    }
  });

  const handleEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddress({ ...address, [name]: value });
  };

  const orderData = {
    items,
    amount,
    address,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${url}/api/order/place`, orderData, {
        headers: { token },
      });
      const session = res.data.session;
      if (res.data.success) {
        toast.success(res.data.message);
        setAddress({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          street: "",
          zipcode: "",
          city: "",
          state: "",
          country: "",
        });
        window.location.replace(session);
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-blue-600 py-6 text-center text-white">
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
            🛍️ Place Your Order
          </h1>
          <p className="text-blue-100 mt-1">
            Complete your delivery details to continue to payment
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input
            onChange={handleEvent}
            name="firstName"
            placeholder="First Name"
            type="text"
            required
            value={address.firstName}
            className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <input
            onChange={handleEvent}
            name="lastName"
            placeholder="Last Name"
            type="text"
            required
            value={address.lastName}
            className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <input
            onChange={handleEvent}
            name="email"
            placeholder="Email Address"
            type="email"
            required
            value={address.email}
            className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <input
            onChange={handleEvent}
            name="phone"
            placeholder="Phone Number"
            type="text"
            required
            value={address.phone}
            className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <input
            onChange={handleEvent}
            name="street"
            placeholder="Street"
            type="text"
            required
            value={address.street}
            className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none col-span-1 md:col-span-2"
          />
          <input
            onChange={handleEvent}
            name="zipcode"
            placeholder="Zip Code"
            type="text"
            required
            value={address.zipcode}
            className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <input
            onChange={handleEvent}
            name="city"
            placeholder="City"
            type="text"
            required
            value={address.city}
            className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <input
            onChange={handleEvent}
            name="state"
            placeholder="State"
            type="text"
            required
            value={address.state}
            className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <input
            onChange={handleEvent}
            name="country"
            placeholder="Country"
            type="text"
            required
            value={address.country}
            className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />

          <div className="md:col-span-2 flex flex-col items-center gap-4 mt-4">
            <p className="text-gray-600 text-lg">
              Delivery Fee: <span className="font-semibold">$4</span>
            </p>
            <p className="text-gray-800 font-bold text-xl">
              Total: <span className="text-blue-600">${amount}</span>
            </p>
            <button
              type="submit"
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 active:scale-95 transition-transform duration-200"
            >
              Go to Payment 💳
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlaceOrder;
