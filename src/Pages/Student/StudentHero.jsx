import React from 'react';
import PinkBottleIllustration from '../../assets/img/1.png'; // Make sure to replace with your actual image paths
import YellowToastIllustration from '../../assets/img/2.png'; // Make sure to replace with your actual image paths

const StudentHero= () => {
  return (
   <section className="bg-[#fdf6ee] min-h-[90vh] pt-45 flex items-center justify-center">
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
        {/* Top Text */}
        <h1 className="text-5xl md:text-8xl font-extrabold text-[#1e1b2e] leading-tight">
          A sweet, secret Project <br className="hidden md:block" />
          ingredient
        </h1>

        {/* Sub Text */}
        <p className="mt-6 text-lg md:text-xl text-[#4d4d56] max-w-2xl">
          Plug into a world-class design team, making your process faster,
          more efficient, and scalable with easy  pricing.
        </p>

        {/* CTA Button */}
        <button className="mt-8 bg-[#ff4dad] text-white font-semibold px-8 cursor-pointer py-4 rounded-full shadow hover:bg-[#ff369a] transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 hover:shadow-2xl">
          SEE PRICING
        </button>

        {/* Cancel Info */}
        <p className="mt-4 text-sm text-[#4d4d56]">No worries, you can cancel any time!</p>

        {/* Characters */}
        <div className="absolute left-0 bottom-0 md:bottom-auto md:top-1/2 transform md:-translate-y-1/2 w-16 sm:w-24 md:w-40">
          <img
            src={PinkBottleIllustration}
            alt="Paint Character"
            className="w-full h-24 sm:h-40 md:h-60 object-contain"
          />
        </div>
        <div className="absolute right-0 bottom-0 md:bottom-auto md:top-1/2 transform md:-translate-y-1/2 w-16 sm:w-24 md:w-40">
          <img
            src={YellowToastIllustration}
            alt="Toast Character"
            className="w-full h-24 sm:h-40 md:h-60 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default StudentHero;