import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ball from '../../assets/img/DarkOrange-ball.png';
import PinkCube from '../../assets/img/new-pink-cube.png';
import whiteCube from '../../assets/img/CUBE WHITE.png';
import home4 from '../../assets/img/Home_4.jpg'


// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  useEffect(() => {
    // Animate .WhiteCube1 based on scroll
    gsap.to('.WhiteCube1', {
      y: -10,
      // duration: 2,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.animation-container',
        start: 'top 48%',
        end: 'top 70%',
        scrub: 2,
      },
    });

    // Animate .WhiteCube2 based on scroll
    gsap.to('.WhiteCube2', {
      x: -25,
      // duration: 2,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.animation-container',
        start: 'top 48%',
        end: 'top 70%',
        scrub: 2,
      },
    });

    // Animate .WhiteCube3 based on scroll
    gsap.to('.WhiteCube3', {
      x: 25,
      // duration: 2,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.animation-container',
        start: 'top 48%',
        end: 'top 70%',
        scrub: 2,
      },
    });

    // Animate .WhiteCube4 based on scroll
    gsap.to('.WhiteCube4', {
      y: -90,
      // duration: 2,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.animation-container',
        start: 'top 48%',
        end: 'top 70%',
        scrub: 2,
      },
    });

    // Animate .ball based on scroll
    gsap.to('.ball', {
      y: -75,
      // duration: 2,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.animation-container',
        start: 'top 48%',
        end: 'top 70%',
        scrub: 2,
      },
    });
  }, ['.animation-container', '.WhiteCube1', '.WhiteCube2', '.WhiteCube3', '.WhiteCube4', '.ball']);

  return (
    <div className="Container h-screen w-full font-inter">
      <div className="   bg-gray-800 h-full w-full   overflow-hidden  ">
     <div className={`Home flex items-center justify-center absolute w-full h-full max-[450px]:w-full  max-[450px]:h-full `}>
        <div className="left-20 max-[450px]:left-2 absolute z-10 max-[450px]:pl-5  top-40 max-[450px]:top-42">
         <h1  className='text-[4rem] max-[450px]:text-[32px] max-[450px]:leading-8 font-extrabold font-sans  text-gray-900  '>Elevate with ASK </h1>
         <h2 className="text-[3rem] max-[450px]:text-[32px] font-bold"> Technology</h2>
         {/* <h1 className='text-[2rem]  text-gray-900'>Welcome to ASK Technology Solution</h1> */}
         <p className='text-[20px] max-[450px]:text-[14px]  relative z-50 font-bold max-[450px]:mt-2  text-gray-600 mt-7 max-w-[50%] max-[450px]:max-w-[80%]'>
           — your premier partner in transforming bold ideas 
           into refined digital masterpieces. 
         </p>
          <button className="bg-[#3325ae] cursor-pointer text-white text-xl font-bold px-4 py-2 mt-5 rounded-lg hover:bg-blue-600 transition  duration-300 max-[450px]:w-35 max-[450px]:mt-3 max-[450px]:h-10 max-[450px]:text-[16px] max-[450px]:p-0 ">
            Get Started
          </button>
        </div>

        <div className="animation-container">
          <img src={whiteCube} alt="" className="WhiteCube1 absolute top-[20%] right-[25.3%]  w-35 max-[450px]:w-15 max-[450px]:h-15 max-[450px]:top-[60%] max-[450px]:right-[30%]" />
          <img src={whiteCube} alt="" className="WhiteCube2 absolute top-[30%] right-[31.3%] w-35 w-35 max-[450px]:w-15 max-[450px]:h-15 max-[450px]:top-[65%]  max-[450px]:right-[40%]" />
          <img src={whiteCube} alt="" className="WhiteCube3 absolute top-[30%] right-[19%] w-35 w-35 max-[450px]:w-15 max-[450px]:h-15 max-[450px]:top-[65%]  max-[450px]:right-[22%]" />
          <img src={PinkCube} alt="" className="WhiteCube4 absolute top-[20%] right-[25.3%] w-35  w-35 max-[450px]:w-15 max-[450px]:h-15 max-[450px]:top-[60%]  max-[450px]:right-[30%] " />
          <img src={ball} alt="" className="ball absolute top-[60%] right-[27.5%] w-16 max-[450px]:w-10 max-[450px]:hidden" />
        </div>
      </div>

      </div>
    </div>
  );
};

export default HeroSection;