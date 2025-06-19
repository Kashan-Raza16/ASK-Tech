import React from "react";

// FandQ component for the pricing section replica
const Call = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-inter">
      <div className="relative bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 max-w-4xl w-full text-center overflow-hidden">
        {/* Decorative elements - adjust positioning and SVG paths as needed */}
        <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 opacity-70">
          <svg
            width="150"
            height="150"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 0C44.7715 0 0 44.7715 0 100C0 155.228 44.7715 200 100 200C155.228 200 200 155.228 200 100C200 44.7715 155.228 0 100 0Z"
              fill="#F8E5EE"
              fillOpacity="0.8"
            />
            <circle cx="150" cy="50" r="20" fill="#D2F3F0" fillOpacity="0.8" />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-70">
          <svg
            width="150"
            height="150"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 0C44.7715 0 0 44.7715 0 100C0 155.228 44.7715 200 100 200C155.228 200 200 155.228 200 100C200 44.7715 155.228 0 100 0Z"
              fill="#EDF2F7"
              fillOpacity="0.8"
            />
            <circle cx="50" cy="150" r="20" fill="#FFEFE1" fillOpacity="0.8" />
          </svg>
        </div>

        {/* Content Section */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight relative z-10">
          Starting at <span className="text-purple-700">999 </span>
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mb-8 text-gray-600 text-lg sm:text-xl relative z-10">
          <span className="flex items-center">
            <span className="w-2 h-2  rounded-full mr-2"></span>Ask about our
            packages
          </span>
          <span className="flex items-center">
            <span className="w-2 h-2  rounded-full mr-2"></span>Fast Delivery
          </span>
          <span className="flex items-center">
            <span className="w-2 h-2  rounded-full mr-2"></span>Top-tier team
          </span>
          {/* <span className="flex items-center">
            <span className="w-2 h-2 rounded-full mr-2"></span>Cancel anytime
          </span> */}
        </div>

        <button
          className="relative z-10 cursor-pointer mt-5 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full text-xl sm:text-2xl transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-pink-300"
          onClick={() => {
            window.open("tel:+1234567890");
          }}
        >
          Book a quick call
        </button>

        <p className="mt-8 text-sm text-gray-500 max-w-lg mx-auto relative z-10">
          When subscribed to ASK Tech you are agreeing to our{" "}
          <a href="#" className="text-pink-600 hover:underline">
            Terms of Service
          </a>
          . You'll receive an invite to your dedicated Trello board within 24
          hours to manage your project requests.
        </p>

        {/* Floating icons - adjust positioning and SVG paths/emojis as needed */}
        <div className="absolute -top-4 left-10 transform rotate-12 z-0">
          {/* Coffee Cup SVG */}
          <svg
            width="80"
            height="80"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M70 10H30C24.4772 10 20 14.4772 20 20V70C20 75.5228 24.4772 80 30 80H70C75.5228 80 80 75.5228 80 70V20C80 14.4772 75.5228 10 70 10Z"
              fill="#F472B6"
            />
            <path d="M80 30H90V50H80V30Z" fill="#F472B6" />
            <path d="M40 80V90H60V80H40Z" fill="#F472B6" />
            <circle cx="50" cy="40" r="10" fill="#FEE2E2" />
            <circle cx="65" cy="25" r="5" fill="#FEE2E2" />
            <circle cx="35" cy="20" r="7" fill="#FEE2E2" />
          </svg>
        </div>
        <div className="absolute top-1/4 right-8 transform -rotate-6 z-0">
          {/* Donut SVG */}
          <svg
            width="60"
            height="60"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="40" stroke="#FDBA74" strokeWidth="10" />
            <circle cx="50" cy="50" r="20" fill="#FDBA74" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Call;
