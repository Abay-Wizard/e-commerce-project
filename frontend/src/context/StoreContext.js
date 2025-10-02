import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  const url = "http://localhost:5000";
  const [token, setToken] = useState("");
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});

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
  const fetchCartItems = async (activeToken) => {
    try {
      const res = await axios.get(`${url}/api/cart/get`, {
        headers: {token: activeToken },
      });
      if (res.data.success) {
        setCartItems(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const addToCart = async (productId) => {
    try {
      setCartItems((prev)=>({
        ...prev,[productId]:prev[productId]?prev[productId]+1:1
      }))
      await axios.post(
        `${url}/api/cart/add`,
        { productId },
        { headers: { token } }
      );
    } catch (error) {
      console.log(error);
    }
  };
  const removeFromCart = async (productId) => {
    try {
      if (cartItems[productId] > 0) {
        setCartItems({ ...cartItems, [productId]: cartItems[productId] - 1 });
      }
      await axios.post(
        `${url}/api/cart/remove`,
        { productId },
        { headers: { token } }
      );
    } catch (error) {}
  };

  const getTotalCart = () => {
    let totalCart = 0;
    products.forEach((product) => {
      if (cartItems[product._id] > 0) {
        totalCart += cartItems[product._id];
      }
    });
    return totalCart;
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    products.forEach((product) => {
      if (cartItems[product._id] > 0) {
        totalPrice += cartItems[product._id] * product.price;
      }
    });
    return totalPrice;
  };

  const values = {
    url,
    token,
    setToken,
    products,
    cartItems,
    fetchCartItems,
    fetchProducts,
    removeFromCart,
    addToCart,
    getTotalCart,
    getTotalPrice
  };

  useEffect(()=>{
    if(token){
        fetchCartItems(token)
    }
  },[token]) 

  useEffect(() => {
    const loadData = async () => {
      await fetchProducts();
      const savedToken=localStorage.getItem('token')
      if (savedToken) {
        setToken(savedToken)
        await fetchCartItems(savedToken);
        
      }
    };
    loadData();
  }, []);
  return (
    <StoreContext.Provider value={values}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
