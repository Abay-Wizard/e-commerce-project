import React, { useState, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Navbar = () => {
  const { searchText, setSearchText, token, setToken, getTotalCart } = useContext(StoreContext);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState("home");
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 md:px-12 py-3 sm:py-4 sticky top-0 bg-gray-50 shadow-md z-50">
      {/* Left - Logo */}
      <div>
        <h1
          className="text-red-600 text-3xl sm:text-4xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          GoShop
        </h1>
      </div>

      {/* Center - Nav Links or Search */}
      <div className="flex-1 flex justify-center">
        {!isSearchOpen ? (
          <ul className="hidden md:flex items-center gap-6 lg:gap-10 text-sm lg:text-base">
            <li
              onClick={() => setMenu("home")}
              className={`${menu === "home" ? "text-blue-500" : "text-gray-800"} hover:text-blue-500 transition`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              onClick={() => setMenu("shop")}
              className={`${menu === "shop" ? "text-blue-500" : "text-gray-800"} hover:text-blue-500 transition`}
            >
              <Link to="/shop">Shop Now</Link>
            </li>
            <li
              onClick={() => setMenu("about")}
              className={`${menu === "about" ? "text-blue-500" : "text-gray-800"} hover:text-blue-500 transition`}
            >
              <Link to="/about">About</Link>
            </li>
            <li
              onClick={() => setMenu("contact")}
              className={`${menu === "contact" ? "text-blue-500" : "text-gray-800"} hover:text-blue-500 transition`}
            >
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        ) : (
          <div className="flex items-center w-full md:w-2/3 lg:w-1/2 bg-white shadow-md rounded-full overflow-hidden border border-gray-300 transition-all duration-300">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search products..."
              className="flex-grow px-4 sm:px-5 py-2 focus:outline-none text-gray-700 text-sm sm:text-base"
              autoFocus
            />
            <button
              onClick={() => {
                setIsSearchOpen(false);
                setSearchText("");
              }}
              className="px-4 sm:px-5 text-gray-600 hover:text-red-500 transition-colors"
            >
              <FaTimes size={20} />
            </button>
          </div>
        )}
      </div>

      {/* Right - Icons */}
      <div className="flex items-center gap-3 sm:gap-5">
        {/* Search icon */}
        {!isSearchOpen && (
          <img
            className="size-6 sm:size-7 md:size-8 cursor-pointer"
            onClick={() => setIsSearchOpen(true)}
            src="https://www.iconpacks.net/icons/2/free-search-icon-2903-thumb.png"
            alt="search"
          />
        )}

        {/* Cart */}
        <div
          onClick={() => navigate("/cart")}
          className="relative inline-block cursor-pointer"
        >
          <img
            className="size-5 sm:size-6 md:size-8"
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            alt="cart"
          />
          {getTotalCart() > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] sm:text-xs font-bold w-4 sm:w-5 h-4 sm:h-5 flex items-center justify-center rounded-full">
              {getTotalCart()}
            </span>
          )}
        </div>

        {/* Profile or Sign In */}
        {token ? (
          <div className="relative">
            <img
              onClick={() => setIsOpen((prev) => !prev)}
              className="size-8 sm:size-9 md:size-10 rounded-full cursor-pointer"
              src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
              alt="user"
            />
            {isOpen && (
              <div className="absolute top-10 right-0 flex flex-col items-start bg-white shadow-lg rounded-xl w-28 sm:w-32 py-2 z-20">
                <Link
                  onClick={() => setIsOpen(false)}
                  to="/myorders"
                  className="px-4 py-2 w-full text-purple-500 text-left hover:bg-gray-100 text-sm"
                >
                  Orders
                </Link>
                <button
                  onClick={() => {
                    setToken("");
                    setIsOpen(false);
                  }}
                  className="px-4 py-2 w-full text-purple-500 text-left hover:bg-gray-100 text-sm"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate("/signin")}
            className="hidden sm:block rounded-lg py-1 px-3 text-xs sm:text-sm text-white bg-red-500 hover:bg-red-600 transition-colors"
          >
            Sign In
          </button>
        )}

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen((prev) => !prev)}>
            {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-purple-50 z-50 shadow-md">
          <ul className="flex flex-col items-start gap-4 p-6 text-sm">
            <li onClick={() => setIsMenuOpen(false)}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link to="/about">About</Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link to="/shop">Shop</Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link
                to="/signup"
                className="rounded-lg px-3 py-2 text-sm text-white bg-red-500 hover:bg-red-600 transition"
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
