import React from 'react'

const ThinkMakeSolve = () => {
  return (
     // Main container with a light background and content aligned to the start,
    // min-height for full viewport, padding, and overflow-hidden for background elements.
    <div className="relative min-h-screen bg-gray-50 flex flex-col items-start justify-center overflow-hidden font-inter">
      {/* Absolute positioned background shapes to mimic the reference image */}
      {/* Large angled pinkish block */}
      <div className="absolute top-0 right-0 w-80 h-80 md:w-96 md:h-96 bg-purple-200 opacity-60 transform rotate-45 skew-x-12 -translate-y-1/3 translate-x-1/3 rounded-3xl shadow-xl"></div>
      {/* Smaller white cubes/blocks */}
      <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-white opacity-80 rounded-lg shadow-md"></div>
      <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-white opacity-80 rounded-lg shadow-sm"></div>
      <div className="absolute bottom-1/3 right-1/5 w-16 h-16 bg-white opacity-80 rounded-lg shadow-lg"></div>

      {/* Content wrapper to constrain width and ensure proper stacking context */}
      {/* Removed max-w-5xl and adjusted padding to control left space */}
      <div className="relative left-15 z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 text-left">
        {/* "What I Do" Section */}
        <div className="mb-10 md:mb-12">
          <div className="flex items-center space-x-3 mb-2">
            {/* Decorative line */}
            <div className="w-10 h-0.5 bg-indigo-600 rounded-full"></div>
            <p className="text-sm md:text-base font-medium text-gray-700">What I Do</p>
          </div>
          {/* Main descriptive heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mt-4">
            I enjoy creating delightful, <br className="hidden sm:inline"/> human-centered digital experiences.
          </h1>
        </div>

        {/* Large "Think. Make. Solve." Headline */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none text-gray-900">
            Think. Make. Solve.
          </h2>
        </div>

        {/* "Contact Me" Button */}
        <div>
          <button className="inline-flex items-center space-x-2 px-7 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span>Contact Me</span>
            {/* SVG icon for the arrow */}
            <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ThinkMakeSolve