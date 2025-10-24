import React from "react";
import axios from "axios";
import toast from 'react-hot-toast'
import { createContext, useState } from "react";
import { useEffect } from "react";

export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  const url = "http://localhost:5000"; //https://e-commerce-project-1pvn.onrender.com
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [users,setUsers]=useState([])
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
      const res=await axios.get(`${url}/api/order/orders`)
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

  const fetchUsers=async() =>{
        try {
          const res=await axios.get(`${url}/api/user/users`)
          if(res.data.success){
            setUsers(res.data.data)
          }
        } catch (error) {
          console.log(error)
        }
  }

  const values = {
    url,
    products,
    setOrders,
    setProducts,
    orders,
    users,
    fetchProducts,
    deleteProduct,
    refreshFlag,
    setRefreshFlag,
    updateStatus,
    fetchOrders
  };
  useEffect(()=>{
    fetchOrders()
    fetchUsers()
  },[])

  useEffect(() => {
    fetchProducts();
    fetchOrders()
  }, [refreshFlag]);
  return (
    <StoreContext.Provider value={values}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
