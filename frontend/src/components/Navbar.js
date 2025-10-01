import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link,useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate=useNavigate()
  return (
    <nav className="flex items-center justify-around py-5 sticky z-50 top-0 bg-gray-50 shadow-md">
      <div>
        <h1 className="text-red-600 text-4xl">GoShop</h1>
      </div>
      <div className="hidden md:block">
        <ul className="flex items-center gap-10">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact us</Link>
        </ul>
      </div>
      <div className="flex items-center gap-5">
        <img
          className="size-8 cursor-pointer"
          src="https://www.iconpacks.net/icons/2/free-search-icon-2903-thumb.png"
          alt="search"
        />
        <img
          className="size-8 cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
          alt="cart"
        />
        <button onClick={()=>navigate('/signup')} className="hidden sm:block rounded-lg py-1 px-2 text-white bg-red-500">
          Sign Up
        </button>
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
