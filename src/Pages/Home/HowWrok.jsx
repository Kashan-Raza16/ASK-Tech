import gsap from "gsap";
import React, { useEffect, useState } from "react";
import purleCube from "../../assets/img/purpal-cube.png";
import pinkCube from "../../assets/img/PINK-CUBE.png";
import whiteCube from "../../assets/img/cube.png";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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

    gsap.to(".Floating-pink-cube", {
      y: -80,
      duration: 2,
      ease: "power1.inOut",
      scrollTrigger: {
        scroller: "body",
        trigger: ".Floating-pink-cube",
        start: "50% 50%",
        end: "bottom bottom",
        scrub: 2,
      },
    });

    gsap.to(".Floating-white-cube1", {
      y: 90,
      duration: 2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".Floating-white-cube1",
        start: "60% 60%",
        end: "bottom bottom",
        scrub: 2,
      },
    });

    gsap.to(".Floating-white-cube2", {
      x: 130,
      y: 30,
      // y: 20,
      duration: 2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".Floating-white-cube2",
        start: "top 50%",
        end: "bottom bottom",
        scrub: 2,
      },
    });

    gsap.to(".Floating-purple-cube", {
      x: -135,
      duration: 2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".Floating-purple-cube",
        start: "top 55%",
        end: "bottom bottom",
        scrub: 2,
      },
    });
  }, []);

  return (
    <div className=" h-screen w-full flex page4  max-[450px]:h-[800px] ">
      <main className="relative bg-[#5A45CB] h-screen w-full  p-8 text-white font-sans max-[450px]:h-200 ">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          {/* Left Column: Text Content */}
          <div className="relative z-10 w-full md:w-1/2 flex-shrink-0  text-center md:text-left">
            <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
              <div className="w-8 h-px bg-white/70"></div>
              <p className="text-sm font-semibold tracking-[.2em]">
                WHO WE WORK WITH 
              </p>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Art Direction for Global Leading Brands.
            </h1>
            <p className="text-base lg:text-lg text-white/80 max-w-md mx-auto md:mx-0 mb-10">
              I research and create breakthrough - delightful ideas, leading
              visual designers.
            </p>
            
          </div>

          {/* Right Column: Floating 3D Shapes */}
          <div className="FloatingCube relative w-full md:w-1/2 h-[20rem] md:h-[40rem] lg:h-[50rem]  max-[450px]:h-100">
            {/* Cubes using images */}
            <img
              src={whiteCube}
              alt="Floating-white-cube1"
              className="Floating-white-cube1 absolute object-contain w-24 h-[10rem] md:w-32 md:h-[10rem] top-[30%] left-[10%] lg:left-[51%] max-[450px]:left-[35%] max-[450px]:top-[10%]"
            />
            <img
              src={pinkCube}
              alt="Floating-pink-cube"
              className="Floating-pink-cube absolute object-contain w-24 h-[10rem] md:w-32 md:h-[10rem] top-[30%] right-[10%] lg:right-[30%] max-[450px]:left-[35%] max-[450px]:top-[10%]"
            />
            <img
              src={whiteCube}
              alt="Floating-white-cube2"
              className="Floating-white-cube2 z-5 absolute object-contain w-24 h-[10rem] md:w-32 md:h-[10rem] top-[30%] right-[10%] lg:right-[30%] max-[450px]:left-[35%] max-[450px]:top-[10%]"
            />
            <img
              src={purleCube}
              alt="Floating-purple-cube"
              className="Floating-purple-cube z-1 absolute object-contain w-24 h-[10rem] md:w-32 md:h-[10rem] top-[30%] right-[10%] lg:right-[30%] max-[450px]:left-[35%] max-[450px]:top-[10%]"
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
              // className="absolute rounded-full shadow-[0px_4px_10px_#808080] bg-[#F9A825] w-8 h-8 md:w-10 md:h-10 top-[37%] right-[92%]"
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
