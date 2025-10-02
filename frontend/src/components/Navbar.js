import React, { useState, useContext } from "react";
import { FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [menu,setMenu]=useState('home')
  const { token, setToken, getTotalCart } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <nav className="flex items-center justify-around py-5 sticky z-50 top-0 bg-gray-50 shadow-md">
      <div>
        <h1 className="text-red-600 text-4xl">GoShop</h1>
      </div>
      <div className="hidden md:block">
        <ul className="flex items-center gap-10">
          <li onClick={()=>setMenu('home')} className={menu==='home'? `text-blue-500`:'text-gray-800'}><Link to="/">Home</Link></li> 
          <li onClick={()=>setMenu('about')} className={menu==='about'? `text-blue-500`:'text-gray-800'}><Link to="/about">About</Link></li>
          <li onClick={()=>setMenu('contact')} className={menu==='contact'? `text-blue-500`:'text-gray-800'}><Link to="/contact">Contact us</Link></li> 
        </ul>
      </div>
      <div className="flex items-center gap-5">
        <img
          className="size-8 cursor-pointer"
          src="https://www.iconpacks.net/icons/2/free-search-icon-2903-thumb.png"
          alt="search"
        />
        <div className="relative inline-block">
          <img
            className="w-8 h-8 cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            alt="cart"
          />
          {getTotalCart() > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {getTotalCart()}
            </span>
          )}
        </div>

        {token ? (
          <div className="relative">
            <img
              onClick={() => setIsOpen((prev) => !prev)}
              className="size-10 rounded-full cursor-pointer"
              src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
              alt=""
            />

            {isOpen && (
              <div className="absolute top-12 right-0 flex flex-col items-start bg-white shadow-lg rounded-xl w-32 py-2 z-20">
                <Link
                  onClick={() => setIsOpen((prev) => !prev)}
                  to="/myorders"
                  className="px-4 py-2 w-full text-purple-500 text-left hover:bg-gray-100"
                >
                  Orders
                </Link>
                <button
                  onClick={() => {
                    setToken("");
                    setIsOpen((prev) => !prev);
                  }}
                  className="px-4 py-2 w-full text-purple-500 text-left hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate("/signin")}
            className="hidden sm:block rounded-lg py-1 px-2 text-white bg-red-500"
          >
            Sign In
          </button>
        )}
      </div>
      {/*Mobile menu */}
      <div className="md:hidden">
        <button
          onClick={() => {
            setIsMenuOpen((prev) => !prev);
          }}
        >
          <FaBars size={24} />
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-purple-50 z-50 shadow-md">
          <ul className="flex flex-col items-start gap-4 p-8">
            <li onClick={() => setIsMenuOpen((prev) => !prev)}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={() => setIsMenuOpen((prev) => !prev)}>
              <Link to="/about">About</Link>
            </li>
            <li onClick={() => setIsMenuOpen((prev) => !prev)}>
              <Link to="/contact">Contact us</Link>
            </li>
            <li onClick={() => setIsMenuOpen((prev) => !prev)}>
              <Link
                to="/signup"
                className="rounded-lg p-2 text-white bg-red-500"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
