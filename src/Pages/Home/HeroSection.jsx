import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ball from '../../assets/img/Ball1.png';
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
    <div className="Container w-full">
      <div className="Home max-[400px]:hidden bg-gray-800 relative flex items-center justify-center h-full w-full">
       
        <div className="left-content absolute left-10 top-45">
         <h1 className='text-[40px] batmfa text-gray-900'>Elevate With ASK Technology</h1>
         <h1 className='text-[20px] batmfa text-gray-900'>Welcome to <b>ASK Technology Solution</b></h1>
         <p className='text-[18x] text-gray-900'> <b> —your premier partner in transforming bold ideas <br />
          into refined digital masterpieces. We specialize in bespoke web design,<br />
         high-performance web development, and next-generation <br />
          mobile applications for both iOS and Android platforms. </b></p>
          <button className="bg-blue-500 text-gray-600 px-6 py-2 mt-5 rounded hover:bg-blue-600 transition duration-300">
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