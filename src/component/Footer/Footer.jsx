import { FaXTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Main App component
const Footer = () => {

useEffect(() =>{

    // GSAP animation for the footer text
    gsap.to('.ask-tech', {
         y: 150,
         duration: 2,
         ease: 'power1.inOut',
         scrollTrigger: {
           trigger: '.ask-tech',
           start: 'top 2%',
           end: 'bottom 70%',
           scrub: 2,
         },
       });

},[]);

   


  return (
    <div className="h-screen flex-col z-10 mb-0 pb-0 bg-gray-200  text-gray-800 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Footer Container */}
      <div className="ask-tech ">
        <h1 className="text-[17rem] text-gray-700 font-[PP-Neue-Machina]">ASK Tech</h1>
      </div>

      <footer className="w-full z-20 mb-5 max-w-10xl bg-white shadow-xl rounded-xl p-6 sm:p-8 md:p-10 lg:p-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12 lg:gap-16">
          {/* Logo and Description Section */}
          <div className="flex flex-col items-start md:w-1/3 lg:w-2/5">
            {/* Graphy Logo */}
            <div className="flex items-center mb-4">
              {/* You can keep your SVG logo here */}
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-900 mr-2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="text-4xl font-bold text-gray-900">ASK Tech</span>
            </div>
            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              ASK Tech empowers teams to transform raw data into clear,
              compelling visuals — making insights easier to share, understand,
              and act on.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-5">
              <a
                href="#"
                aria-label="X"
                className="text-gray-500 hover:text-gray-900 transition-colors duration-300 transform hover:scale-110 text-2xl"
              >
                <FaXTwitter />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-500 hover:text-gray-900 transition-colors duration-300 transform hover:scale-110 text-2xl"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-500 hover:text-gray-900 transition-colors duration-300 transform hover:scale-110 text-2xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="text-gray-500 hover:text-gray-900 transition-colors duration-300 transform hover:scale-110 text-2xl"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Navigation Links Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-y-6 gap-x-8 md:gap-x-12 lg:gap-x-20 w-full md:w-2/3 lg:w-3/5">
            {/* Product Column */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Product
              </h3>
              <ul className="space-y-3 text-lg">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    Changelog
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Resources
              </h3>
              <ul className="space-y-3 text-lg">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    Tutorials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Company
              </h3>
              <ul className="space-y-3 text-lg">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    Partners
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <hr className="my-8 border-gray-200" />

        {/* Copyright and Legal Links Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-lg text-gray-500 space-y-4 sm:space-y-0">
          <p>© 2025 ASK Tech. All rights reserved.</p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-gray-900 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-gray-900 transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-gray-900 transition-colors duration-300"
            >
              Cookies Settings
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
