import React from "react";
import { useState } from "react";
import Logo from "../../assets/img/ask logo.png"; // Assuming you have a logo image

const StudentNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Array of navigation links, making it easy to add/remove items
  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "SERVICES", href: "#services" },
    { name: "PRICING", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <div className="flex justify-center items-center min-h-[80px] bg-[#fdf6ee]">
      <nav className="p-4 shadow-md mt-10  rounded-lg w-full max-w-4xl">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            {/* Using a placeholder for the logo as an SVG or image URL wasn't provided. */}
            {/* Replace this with your actual logo (e.g., <img src="your-logo.svg" alt="Jam Logo" />) */}
            <a
              href="#"
              className="text-4xl font-bold text-indigo-800 tracking-tight"
            >
              <img src={Logo} alt=""
              className="h-15 w-20" />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-[#ed8f24a3] px-3 py-2 rounded-md text-lg font-medium transition duration-300 ease-in-out"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md p-2"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"}
            >
              {/* Hamburger icon when menu is closed, X icon when open */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - conditionally rendered based on isOpen state */}
        {isOpen && (
          <div className="md:hidden mt-2" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-700 hover:text-indigo-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
                  onClick={() => setIsOpen(false)} // Close menu on link click
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default StudentNav;
