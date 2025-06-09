import gsap from "gsap";
import React, { useEffect, useState } from "react";
import purleCube from "../../assets/img/purpal-cube.png";
import pinkCube from "../../assets/img/new-pink-cube.png";
import whiteCube from "../../assets/img/cube.png";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/**
 * Icon for the scroll down button.
 */
const ScrollUpDownIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-gray-800 hover:text-gray-600 transition-colors duration-300"
  >
    <path
      d="M12 3V21M12 21L17 16M12 21L7 16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 21V3M12 3L7 8M12 3L17 8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HowWrok = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    console.log("useEffect executed");

    gsap.to('.Floating-pink-cube', {
      y: -25,
      duration: 2,
      ease: 'power1.inOut',
      scrollTrigger: {
        scroller: "body",
      trigger: '.Floating-pink-cube',
      start: '50% 50%',
      end: 'bottom bottom',
      scrub: 2,
      markers: true,
      },
    });

    gsap.to('.Floating-white-cube1', {
      x: -25,
      duration: 2,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.Floating-white-cube1',
        start: '60% 60%',
        end: 'bottom bottom',
        scrub: 2,
        // markers: true,
      },
    });

    gsap.to('.Floating-white-cube2', {
      x: 25,
      y: 20,
      duration: 2,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.Floating-white-cube2',
        start: 'top 50%',
        end: 'bottom bottom',
        scrub: 2,
        // markers: true,
      },
    });

    gsap.to('.Floating-purple-cube', {
      y: 25,
      duration: 2,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.Floating-purple-cube',
        start: 'top 55%',
        end: 'bottom bottom',
        scrub: 2,
        // markers: true,
      },
    });

  }, []);

  return (
    <div className="bg-gray-100 min-h-screen w-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <main className="relative bg-[#5A45CB] h-auto md:h-[90vh] w-full max-w-7xl mx-auto rounded-3xl lg:rounded-[40px] p-6 sm:p-8 md:p-12 lg:p-16 text-white font-sans overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          {/* Left Column: Text Content */}
          <div className="relative z-10 w-full md:w-1/2 flex-shrink-0 text-center md:text-left">
            <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
              <div className="w-8 h-px bg-white/70"></div>
              <p className="text-sm font-semibold tracking-[.2em]">
                WHO I WORK WITH
              </p>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Art Direction for Global Leading Brands.
            </h1>
            <p className="text-base lg:text-lg text-white/80 max-w-md mx-auto md:mx-0 mb-10">
              I research and create breakthrough - delightful ideas, leading
              visual designers.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <button
                className="w-14 h-14 cursor-pointer bg-white rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <ScrollUpDownIcon />
              </button>
              {isHovered && (
                <span className="text-sm font-medium text-white/90 sm:block">
                  Scroll down
                </span>
              )}
            </div>
          </div>

          {/* Right Column: Floating 3D Shapes */}
          <div className="FloatingCube relative w-full md:w-1/2 h-[30rem] md:h-[40rem] lg:h-[50rem] overflow-hidden">
            {/* Cubes using images */}
            <img
              src={whiteCube}
              alt="Floating-white-cube1"
              className="Floating-white-cube1 absolute object-contain w-24 h-[0rem] md:w-32 md:h-[10rem] top-[30%] left-[10%] lg:left-[25%]"
            />
            <img
              src={pinkCube}
              alt="Floating-pink-cube"
              className="Floating-pink-cube absolute object-contain w-24 h-[30rem] md:w-32 md:h-[10rem] top-[17%] right-[10%] lg:right-[35%]"
            />
            <img
              src={whiteCube}
              alt="Floating-white-cube2"
              className="Floating-white-cube2 absolute object-contain w-24 h-[30rem] md:w-32 md:h-[10rem] top-[30%] right-[10%] lg:right-[13%]"
            />
            <img
              src={purleCube}
              alt="Floating-purple-cube"
              className="Floating-purple-cube absolute object-contain w-24 h-[30rem] md:w-32 md:h-[10rem] top-[42%] right-[10%] lg:right-[32%]"
            />

            {/* Spheres using styled divs */}
            <div
              style={{ animationDelay: "-1s" }}
              className="absolute rounded-full shadow-[0px_4px_10px_#808080] bg-white w-6 h-6 md:w-8 md:h-8 top-[0%] right-[90%]"
            ></div>
            <div
              style={{ animationDelay: "-2.5s" }}
              className="absolute rounded-full shadow-[0px_4px_10px_#808080] bg-white w-5 h-5 md:w-7 md:h-7 top-[20%] right-[5%]"
            ></div>
            <div
              style={{ animationDelay: "-4s" }}
              className="absolute rounded-full shadow-[0px_4px_10px_#808080] bg-[#F9A825] w-8 h-8 md:w-10 md:h-10 top-[37%] right-[40%]"
            ></div>
            <div
              style={{ animationDelay: "-2.5s" }}
              className="absolute rounded-full shadow-[0px_4px_10px_#808080] bg-white w-5 h-5 md:w-7 md:h-7 top-[70%] right-[70%]"
            ></div>
          </div>
        </div>
      </main>
    </div>
    
  );
};

export default HowWrok;
