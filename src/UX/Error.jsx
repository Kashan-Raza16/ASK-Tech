import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Error = ({ code, title, message }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Use props if provided, otherwise fallback to location.state or defaults
  const errorCode = code || location.state?.code || 404;
  const errorTitle = title || location.state?.title || "Page Not Found";
  const errorMessage =
    message ||
    location.state?.message ||
    "Oops! The page you are looking for doesn’t exist or has been moved. Let’s get you back to something awesome!";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 px-4">
      <div className="bg-[#F3F4F6] rounded-3xl shadow-2xl p-10 max-w-lg w-full flex flex-col items-center">
        <h1 className="text-8xl font-extrabold text-pink-500 mb-4 drop-shadow-lg">
          {errorCode}
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          {errorTitle}
        </h2>
        <p className="text-gray-500 mb-6 text-center">{errorMessage}</p>
        <button
          onClick={() => navigate("/")}
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-200 text-lg"
        >
          Go Home
        </button>
      </div>
      <div className="mt-10">
        <svg
          width="200"
          height="120"
          viewBox="0 0 200 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="100" cy="100" rx="80" ry="15" fill="#f3e8ff" />
          <circle cx="60" cy="70" r="30" fill="#f9a8d4" opacity="0.5" />
          <circle cx="140" cy="70" r="30" fill="#a5b4fc" opacity="0.5" />
          <circle cx="100" cy="60" r="40" fill="#fef08a" opacity="0.5" />
        </svg>
      </div>
    </div>
  );
};

export default Error;