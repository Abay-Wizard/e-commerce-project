import React from "react";
import axios from "axios";
import toast from 'react-hot-toast'
import { useContext, createContext, useState } from "react";
import { useEffect } from "react";

export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  const url = "http://localhost:5000";
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [refreshFlag,setRefreshFlag] =useState(false)

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${url}/api/product/list`);
      if (res.data.success) {
        setProducts(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const deleteProduct = async (id) => {
    try {
      await axios.post(`${url}/api/product/delete/${id}`);
      setProducts((prev) => prev.filter((product) => product._id !== id));
    } catch (error) {
        console.log(error)
    }
  };

  const fetchOrders=async()=>{
    try {
      const res=await axios.get(`${url}/api/order/orders/get`)
      setOrders(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  
  const updateStatus=async(orderId,status)=>{
        try {
          const res=await axios.post(`${url}/api/order/status`,{orderId,status})
          if(res.data.success){
            toast.success(res.data.message)
          }
        } catch (error) {
          console.log(error)
          toast.error(error?.response?.data?.message)
        }
  }
  const values = {
    url,
    products,
    setOrders,
    setProducts,
    fetchProducts,
    deleteProduct,
    refreshFlag,
    setRefreshFlag
  };

  useEffect(() => {
    fetchProducts();
  }, [refreshFlag]);
  return (
    <StoreContext.Provider value={values}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
