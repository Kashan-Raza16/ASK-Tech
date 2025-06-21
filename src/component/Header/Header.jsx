import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import Logo from "../../assets/img/ask logo.png";
import {NavLink, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  // Hide navbar on /Login
  if (location.pathname === "/Login") return null;
  if (location.pathname === "/dashboard") return null;

  return (
    <nav className="navbar fixed top-0 z-45 w-full text-gray-700 text-[18px] px-4 md:px-6 py-6 flex items-center justify-between">
      <div className="flex items-center space-x-6 gap-20 md:space-x-10">
        {/* Logo */}
        <div>
          <img
            src={Logo}
            alt="ASK Tech Logo"
            className="hover:scale-120 cursor-pointer transition-transform invert duration-300 ease-in-out h-15 w-20"
          />
        </div>

        {/* Nav Links (Hidden on mobile) */}
        <ul className={`flex-col max-[450px]:text-white max-[450px]:pt-15 max-[450px]:rounded-lg max-[450px]:w-[50%] max-[450px]:top-0 max-[450px]:h-screen md:flex-row absolute z-50 md:static top-16 left-0 w-full md:w-auto bg-[#3325ae] md:bg-transparent px-6 md:px-0 md:flex space-y-2 md:space-y-0 md:space-x-10 font-semibold text-md transition-all duration-800 ${mobileMenuOpen ? 'flex' : 'hidden'}`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `cursor-pointer border-b-[3px] border-transparent pb-1 transition-all duration-200 ${
                isActive ? "text-[#ff4dad] border-[#ff4dad] scale-105" : "hover:scale-110"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/Service"
            className={({ isActive }) =>
              `cursor-pointer border-b-[3px] border-transparent pb-1 transition-all duration-200 ${
                isActive ? "text-[#ff4dad] border-[#ff4dad] scale-105" : "hover:scale-110"
              }`
            }
          >
            Service
          </NavLink>
          {/* <NavLink
            to="/Product"
            className={({ isActive }) =>
              `cursor-pointer border-b-[3px] border-transparent pb-1 transition-all duration-200 ${
                isActive ? "text-[#ff4dad] border-[#ff4dad] scale-105" : "hover:scale-110"
              }`
            }
          >
            Product's
          </NavLink> */}
          <NavLink
            to="/About"
            className={({ isActive }) =>
              `cursor-pointer border-b-[3px] border-transparent pb-1 transition-all duration-200 ${
                isActive ? "text-[#ff4dad] border-[#ff4dad] scale-105" : "hover:scale-110"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/student-section"
            className={({ isActive }) =>
              `cursor-pointer border-b-[3px] border-transparent pb-1 transition-all duration-200 ${
                isActive ? "text-[#ff4dad] border-[#ff4dad] scale-105" : "hover:scale-110"
              }`
            }
          >
            Student Section
          </NavLink>
        </ul>
      </div>

      <div className="flex items-center space-x-3 md:space-x-4">
        {/* Optional search input (hidden by default) */}
        <input type="text" name="Search" id="Search" className="border rounded-lg border-gray-400 w-70 hidden" />
        <button
          name="search-button"
          title="search"
          className="w-10 h-10 bg-white cursor-pointer rounded-full border border-white flex items-center justify-center hover:scale-110 transition-transform duration-300 ease-in-out"
        >
          <Search size={22} />
        </button>
        <button
          onClick={() => navigate("/Login")}
          name="Login-Button"
          className="bg-white cursor-pointer text-black px-4 py-2 rounded-full font-medium hidden md:inline-block hover:bg-gray-300 transition-colors duration-200"
        >
          Login
        </button>
        <button
          name="menu-button"
          className="md:hidden ml-2 cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </nav>
  );
};

export default Header;
