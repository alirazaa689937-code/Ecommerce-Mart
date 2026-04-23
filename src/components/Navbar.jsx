import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCartIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Gmart from "../assets/Images/Gmart.png";
const Navbar = ({ cartItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-200 shadow-md py-2" : "bg-white/90 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              <img className="w-30 h-30 flex items-center justify-center pb-3" src={Gmart} alt="logo" />
            </span>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-white transition-colors hover:bg-purple-600 rounded p-2 font-medium"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-gray-700 hover:text-white transition-colors hover:bg-purple-600 rounded p-2 font-medium"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-white transition-colors hover:bg-purple-600 rounded p-2 font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-white transition-colors hover:bg-purple-600 rounded p-2 font-medium"
            >
              Contact
            </Link>
            <Link
              to="/location"
              className="text-gray-700 hover:text-white transition-colors hover:bg-purple-600 rounded p-2 font-medium"
            >
              Location
            </Link>
            <Link
              to="/admin"
              className="text-gray-700 hover:text-white transition-colors  hover:bg-purple-600 rounded p-2 font-medium"
            >
              Admin
            </Link>
          </div>
          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-purple-600"
            >
              <ShoppingCartIcon className="h-6 w-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-purple-600">
              <UserIcon className="h-6 w-6" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600 focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              HOME
            </Link>
            <Link
              to="/products"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              PRODUCTS
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              CONTACT
            </Link>
            <Link
              to="/location"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              LOCATION
            </Link>
            <Link
              to="/admin"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              ADMIN
            </Link>
            <div className="flex space-x-4 px-3 py-2">
              <Link
                to="/cart"
                className="relative text-gray-700 hover:text-purple-800"
              >
                <ShoppingCartIcon className="h-6 w-6" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </Link>
              <Link to="/login" className="text-gray-700 hover:text-purple-800">
                <UserIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
