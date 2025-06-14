import React from "react";

const Products = () => {
  return (
    <div className="bg-gradient-to-br from-slate-800 via-slate-600 to-slate-400 text-white h-screen flex items-center justify-center">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-12 flex flex-col items-center max-w-lg w-full animate-fade-in">
        <svg
          className="w-20 h-20 mb-6 text-yellow-400 animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6l4 2m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h1 className="text-4xl font-extrabold mb-3 text-center drop-shadow-lg">
          Our Products
        </h1>
        <p className="text-base text-slate-100 text-center mb-2">
          Explore our upcoming range of innovative tech products designed to
          empower students and professionals.
        </p>
        <p className="text-lg text-slate-200 text-center mb-6">
          The Products page is under construction.
          <br />
          We are working hard to bring you something awesome.
        </p>
        <button className="px-6 py-2 bg-yellow-400 text-slate-900 font-semibold rounded-full shadow hover:bg-yellow-300 transition">
          Back to Home
        </button>
        <span className="text-xs text-slate-400 mt-4">
          Stay tuned for updates 🚀
        </span>
      </div>
    </div>
  );
};

export default Products;
