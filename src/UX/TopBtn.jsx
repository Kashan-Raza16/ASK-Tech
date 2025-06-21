import React, { use } from "react";
import { useLocation } from "react-router-dom";

const TopBtn = () => {
  const location = useLocation();
  if (location.pathname === "/Login") return null;

  return (
    <button
      className="fixed bottom-8 z-50 right-8 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 cursor-pointer transition duration-300"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      type="button"
    >
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default TopBtn;
