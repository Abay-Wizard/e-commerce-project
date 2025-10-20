import React, { useEffect, useContext } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { StoreContext } from "../context/StoreContext";

const Verify = () => {
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const success = searchParams.get("success");
        const orderId = searchParams.get("orderId");

        const res = await axios.post(`${url}/api/order/verify`, {
          success,
          orderId,
        });

        if (res.data.success) {
          //toast.success(res.data.message);
          navigate("/myorders");
        } else {
          toast.error("Verification failed");
        }
      } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.message || "Something went wrong!");
      }
    };

    verifyPayment();
  }, [searchParams, url, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl md:text-5xl font-bold text-green-700 mb-4 animate-pulse">
        Verifying Payment...
      </h1>
      <p className="text-gray-500 text-lg">
        Please wait while we confirm your transaction.
      </p>
    </div>
  );
};

export default Verify;
