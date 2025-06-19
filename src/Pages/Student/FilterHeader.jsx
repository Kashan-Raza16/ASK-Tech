import React, { useState, useEffect } from "react";

const FilterHeader = React.memo(() => {
  const [selected, setSelected] = useState("");
  const [animate, setAnimate] = useState(false);

  const handleChange = (e) => {
    setSelected(e.target.value);
    setAnimate(true);
  };

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setAnimate(false), 500);
      return () => clearTimeout(timer);
    }
  }, [animate]);

  return (
    <header className="bg-white py-4 px-6 shadow-sm border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Navigation */}
        <nav className="flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-gray-900 font-semibold">
            Work
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 font-semibold flex items-center"
          >
            Collections
            <span className="ml-1 text-xs px-2 py-0.5 bg-red-500 text-white rounded-full">
              NEW
            </span>
          </a>
        </nav>
        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <select
            className={`bg-gray-100 px-3 py-1 rounded-md text-gray-700 font-semibold focus:outline-none transition duration-300 ${animate ? "ring-2 ring-purple-400 animate-pulse" : ""}`}
            aria-label="Recent Shots"
            value={selected}
            onChange={handleChange}
          >
            <option value="" disabled>
              Recent Shots
            </option>
            <option value="latest">Latest</option>
            <option value="popular">Popular</option>
          </select>
        </div>
      </div>
    </header>
  );
});

export default FilterHeader;