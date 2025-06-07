import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ball from '../../assets/img/Ball.png';
import HomeImg from '../../assets/img/Home_1.jpg';
import PinkCube from '../../assets/img/PINK-CUBE.png';
import whiteCube from '../../assets/img/PINK-CUBE WHITE.png';

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useGSAP(() => {
    const tl = gsap.timeline()

    // Animate .WhiteCube1 based on scroll
    gsap.to('.WhiteCube1', {
      y: -10,
      duration: 1,
      ease: 'power1.inOut',
    });

    // Animate .WhiteCube2 based on scroll
    gsap.to('.WhiteCube2', {
      x: -25,
      scrub: true,
      duration: 1,
      ease: 'power1.inOut',
      // scrollTrigger: commonScrollTrigger,
    });

    // Animate .WhiteCube3 based on scroll
    gsap.to('.WhiteCube3', {
      x: 25,
      scrub: true,
      duration: 1,
      ease: 'power1.inOut',
      // scrollTrigger: commonScrollTrigger,
    });

     // Animate .WhiteCube4 based on scroll
     gsap.to('.WhiteCube4', {
      y: -90,
      scrub: true,
      duration: 1,
      ease: 'power1.inOut',
      // scrollTrigger: commonScrollTrigger,
    });

    // Animate .ball based on scroll
    gsap.to('.ball', {
      y: -75,
      scrub: true,
      duration: 1,
      delay: 0,
      ease: 'power1.inOut',
      // scrollTrigger: commonScrollTrigger,
    });
  }, []);

  return (
    <div className="h-screen w-full bg-gray-800">
      <div className="relative flex items-center justify-center h-full w-full">
        <img src={HomeImg} alt="Home-img" className="w-full h-auto" />

        <div className="left-content absolute left-10">
          <h1 className="text-4xl text-gray-600 font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-lg text-gray-600 mb-6">
            Discover amazing content and connect with our community.
          </p>
          <button className="bg-blue-500 text-gray-600 px-6 py-2 rounded hover:bg-blue-600 transition duration-300">
            Get Started
          </button>
        </div>

<<<<<<< HEAD
        <div className="right-img animation-container">
          <img src={PinkCube} alt="" />
          <img src={whiteCube} alt="" className="WhiteCube1 absolute top-43 right-70 w-35" />
          <img src={whiteCube} alt="" className="WhiteCube2 absolute top-50 right-88 w-35" />
          <img src={whiteCube} alt="" className="WhiteCube3 absolute top-50 right-52 w-35" />
          <img src={whiteCube} alt="" className="WhiteCube4 absolute top-40 right-70 w-35" />
          <img src={ball} alt="" className="ball absolute top-110 right-80 w-18" />
=======
        <div className="right-img absolute">
          <img src={PinkCube} alt="" className="absolute top-[-200%] left-[300%]" />
          <img src={whiteCube} alt="" className="absolute top-[-200%] right-[          git pull origin master0%]" />
          <img src={whiteCube} alt="" className="absolute top-[20%] right-[20%]" />
          <img src={Ball} alt="" className="" />
>>>>>>> 3792a2e (Resolved merge conflicts)
        </div>
      </div>
    </div>
  );
};

export default Home;