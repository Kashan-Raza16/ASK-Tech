import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import Logo from "../../assets/img/ask logo.png"

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className=" fixed top-0 z-45  w-full text-gray-600 text-[18px] px-4 md:px-6 py-6 flex items-center justify-between">
      
      <div className="flex items-center space-x-6 gap-20 md:space-x-10">
        {/* Logo */}
        <div className="w-20 h-20  rounded-full flex items-center justify-center text-black font-bold">
          <img src={Logo} alt="" className='invert-120 hover:scale-130 ' />
        </div>

        {/* Nav Links (Hidden on mobile) */}
        <ul className={`flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-[#1c2431] md:bg-transparent px-6 md:px-0 md:flex space-y-2 md:space-y-0 md:space-x-6 font-semibold text-md transition-all duration-300 ${mobileMenuOpen ? 'flex' : 'hidden'}`}>
          <li className="cursor-pointer border-b-[3px] hover:scale-110 border-transparent hover:border-white pb-1 transition-all duration-200">Home</li>
          <li className="cursor-pointer border-b-[3px] hover:scale-110 border-transparent hover:border-white pb-1 transition-all duration-200">Service</li>
          <li className="cursor-pointer border-b-[3px] hover:scale-110 border-transparent hover:border-white pb-1 transition-all duration-200">Product's</li>
          <li className="cursor-pointer border-b-[3px] hover:scale-110 border-transparent hover:border-white pb-1 transition-all duration-200">About</li>
          <li className="cursor-pointer border-b-[3px] hover:scale-110 border-transparent hover:border-white pb-1 transition-all duration-200">Contact</li>
        </ul>
      </div>

      <div className="flex items-center space-x-3 md:space-x-4">
        {/* <button className="bg-white cursor-pointer text-black px-4 py-2 rounded-full font-medium hidden md:inline-block hover:bg-gray-300 transition-colors duration-200">Intogolf</button> */}
        {/* <button className="bg-white cursor-pointer text-black px-4 py-2 rounded-full font-medium hidden md:inline-block hover:bg-gray-300 transition-colors duration-200">Leden login</button> */}
        <button className="w-10 h-10 bg-white cursor-pointer rounded-full border border-white flex items-center justify-center hover:scale-110 transition-colors duration-200">
          <Search size={22} />
        </button>

        {/* Mobile Menu Toggle Button */}
        <button
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
