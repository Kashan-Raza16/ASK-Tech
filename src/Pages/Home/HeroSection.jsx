import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ball from '../../assets/img/DarkOrange-ball.png';
import PinkCube from '../../assets/img/new-pink-cube.png';
import whiteCube from '../../assets/img/CUBE WHITE.png';

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
      <div className="Home max-[400px]:hidden bg-gray-800 relative flex items-center justify-center h-full w-full">
       
        <div className="left-content absolute pl-20 left-10 top-40">
         <h1 className='text-[4rem] font-extrabold font-sans  text-gray-900'>Elevate with ASK <br /> technology</h1>
         {/* <h1 className='text-[2rem]  text-gray-900'>Welcome to ASK Technology Solution</h1> */}
         <p className='text-[20px] text-gray-900 mt-7 max-w-[44%]'>
           — your premier partner in transforming bold ideas 
           into refined digital masterpieces. We specialize in bespoke web design,
           high-performance web development, and next-generation
           mobile applications for both iOS and Android platforms.
         </p>
          <button className="bg-[#3325ae] cursor-pointer text-white text-xl font-bold px-8 py-4 mt-15 rounded-lg hover:bg-blue-600 transition duration-300">
            Get Started
          </button>
        </div>

        <div className="animation-container">
          <img src={whiteCube} alt="" className="WhiteCube1 absolute top-43 right-100  w-35" />
          <img src={whiteCube} alt="" className="WhiteCube2 absolute top-50 right-120 w-35" />
          <img src={whiteCube} alt="" className="WhiteCube3 absolute top-50 right-80 w-35" />
          <img src={PinkCube} alt="" className="WhiteCube4 absolute top-40 right-100 w-35" />
          <img src={ball} alt="" className="ball absolute top-110 right-104 w-16" />
        </div>
      </div>

      
    </div>
  );
};

export default HeroSection;