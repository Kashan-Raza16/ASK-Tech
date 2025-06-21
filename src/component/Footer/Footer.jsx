import { gsap } from "gsap";
import Logo from "../../assets/img/logo-min.png"
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaXTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const location = useLocation();
  if (location.pathname === "/Login") return null;
  if (location.pathname === "/dashboard") return null;

  useEffect(() => {
    gsap.to(".ask-tech", {
      y: 130,
      duration: 2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".ask-tech",
        start: "top 2%",
        end: "bottom 70%",
        scrub: 2,
      },
    });
  }, []);

  // Common anchor classes for hover scale and transition
  const anchorClass =
    "text-gray-600 hover:text-gray-900 transition-all duration-300 transform hover:scale-110";

  // Social icon anchor classes
  const socialAnchorClass =
    "text-gray-500 hover:text-gray-900 transition-all duration-300 transform hover:scale-110 text-2xl";

  return (
    <div className="h-screen max-[450px]:h-250  flex-col z-10 mb-0 pb-0 bg-gray-200 text-gray-800 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Animated Title */}
      <div className="ask-tech">
        <h1 className="text-[15rem] md:text-[17rem] text-gray-700 font-[RobotoCondensed]  max-[450px]:text-[50px] max-[800px]:text-[50px]">
          ASK Tech
        </h1>
      </div>

      <footer className="w-full z-20 mb-20 max-w-7xl bg-white shadow-xl rounded-xl p-6 sm:p-8 md:p-10 lg:p-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12 lg:gap-16">
          {/* Logo and Description */}
          <div className="flex flex-col items-start md:w-1/3 lg:w-2/5">
            <div className="flex items-center mb-4">
              <img src={Logo} alt="logo" className=" h-[2rem] w-[4rem] mr-2  invert" />
              <span className="text-4xl font-bold text-gray-900 font-[RobotoCondensed]  ">ASK Tech</span>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              ASK Tech empowers teams to transform raw data into clear,
              compelling visuals — making insights easier to share, understand,
              and act on.
            </p>
            <div className="flex space-x-5">
              <a href="#" aria-label="X" className={socialAnchorClass}>
                <FaXTwitter />
              </a>
              <a href="#" aria-label="Instagram" className={socialAnchorClass}>
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn" className={socialAnchorClass}>
                <FaLinkedin />
              </a>
              <a href="#" aria-label="GitHub" className={socialAnchorClass}>
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-y-6 gap-x-8 md:gap-x-12 lg:gap-x-20 w-full md:w-2/3 lg:w-3/5">
            {/* Product */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Product
              </h3>
              <ul className="space-y-3 text-lg">
                <li>
                  <a href="#" className={anchorClass}>
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className={anchorClass}>
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className={anchorClass}>
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className={anchorClass}>
                    Changelog
                  </a>
                </li>
              </ul>
            </div>
            {/* Resources */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Resources
              </h3>
              <ul className="space-y-3 text-lg">
                <li>
                  <a href="#" className={anchorClass}>
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className={anchorClass}>
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href="#" className={anchorClass}>
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className={anchorClass}>
                    Support
                  </a>
                </li>
              </ul>
            </div>
            {/* Company */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Company
              </h3>
              <ul className="space-y-3 text-lg">
                <li>
                  <a href="#" className={anchorClass}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className={anchorClass}>
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className={anchorClass}>
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className={anchorClass}>
                    Partners
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <hr className="my-8 border-gray-200" />

        {/* Copyright and Legal Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-lg text-gray-500 space-y-4 sm:space-y-0">
          <p>© 2025 ASK Tech. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className={anchorClass.replace("text-gray-600 ","pl-10", "hover:text-gray-800")}>
              Privacy Policy
            </a>
            <a href="#" className={anchorClass}>
              Terms of Service
            </a>
            {/* <a href="#" className={anchorClass}>
              Cookies Settings
            </a> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
