import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ball from '../../assets/img/Ball1.png';
import HomeImg from '../../assets/img/Home_1.jpg';
import PinkCube from '../../assets/img/PINK-CUBE.png';
import whiteCube from '../../assets/img/CUBE WHITE.png';

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    // Animate .WhiteCube1 based on scroll
    gsap.to('.WhiteCube1', {
      y: -10,
      duration: 2,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.animation-container',
        start: 'top 48%',
        end: 'top 70%',
        scrub: 2,
        markers: true, 
      },
    });

    // Animate .WhiteCube2 based on scroll
    gsap.to('.WhiteCube2', {
      x: -25,
      duration: 2,
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
      duration: 2,
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
      duration: 2,
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
      duration: 2,
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
      <div className="Home bg-gray-800 relative flex items-center justify-center h-full w-full">
        {/* <img src={HomeImg} alt="Home-img" className="w-full h-auto  " /> */}

        <div className="left-content absolute left-10">
          <h1 className="text-4xl text-gray-600 font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-lg text-gray-600 mb-6">
            Discover amazing content and connect with our community.
          </p>
          <button className="bg-blue-500 text-gray-600 px-6 py-2 rounded hover:bg-blue-600 transition duration-300">
            Get Started
          </button>
        </div>

        <div className="animation-container">
          <img src={whiteCube} alt="" className="WhiteCube1 absolute top-43 right-100 w-35" />
          <img src={whiteCube} alt="" className="WhiteCube2 absolute top-50 right-120 w-35" />
          <img src={whiteCube} alt="" className="WhiteCube3 absolute top-50 right-80 w-35" />
          <img src={PinkCube} alt="" className="WhiteCube4 absolute top-40 right-100 w-35" />
          <img src={ball} alt="" className="ball absolute top-110 right-100 w-16" />
        </div>
      </div>

      <div className="Home2 h-screen w-full bg-gray-800 ">

      </div>
    </div>
  );
};

export default Home;