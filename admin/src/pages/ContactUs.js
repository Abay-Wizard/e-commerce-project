import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { StoreContext } from "../context/StoreContext";
import { Mail, User, MessageCircle } from "lucide-react";

const ContactUs = () => {
  const { url } = useContext(StoreContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(`${url}/api/contact/get`);
        if (res.data.success) {
          setMessages(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    fetchMessages();
  }, [url]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-10 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Contact Messages
        </h1>

        {messages.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            No messages found yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {messages.map((message, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 flex flex-col gap-3"
              >
                <div className="flex items-center gap-2 text-gray-700 font-semibold text-lg">
                  <User className="w-5 h-5 text-blue-500" />
                  {message.name}
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm break-all">
                  <Mail className="w-4 h-4 text-gray-500" />
                  {message.email}
                </div>
                <div className="flex items-start gap-2 text-gray-700 mt-2">
                  <MessageCircle className="w-5 h-5 text-green-500 mt-1" />
                  <p className="leading-relaxed">{message.inquiry}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
