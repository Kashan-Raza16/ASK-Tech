import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EyeIcon from "../assets/img/eye.png";
import EyeOffIcon from "../assets/img/view.png";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Dummy credentials for demonstration
  const DEMO_EMAIL = "user@ask.com";
  const DEMO_PASSWORD = "ask123";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please enter both email and password.");
      return;
    }

    if (email !== DEMO_EMAIL) {
      toast.error("Email not found.");
      return;
    }

    if (password !== DEMO_PASSWORD) {
      toast.error("Password is incorrect.");
      return;
    }

    toast.success("Login successful!");
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f7fb]">
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
      <div className="relative w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl px-10 py-14 flex flex-col items-center overflow-hidden border border-[#ede9f7]">
        {/* Decorative Circle */}
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-purple-100 rounded-full z-0"></div>
        {/* Logo/Icon */}
        <div className="z-10 mb-6 mt-2 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-400 shadow-lg">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.2" fill="none" />
          </svg>
        </div>
        <h2 className="text-3xl font-extrabold text-gray-800 mb-2 z-10">Sign In</h2>
        <p className="text-gray-500 mb-8 text-center text-sm z-10">Welcome back! Please login to your account.</p>
        <form className="w-full flex flex-col gap-5 z-10" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1 ml-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 transition bg-gray-50"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1 ml-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 transition bg-gray-50 pr-12"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500 hover:text-purple-600"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                tabIndex={-1}
              >
                <img
                  src={showPassword ? EyeOffIcon : EyeIcon}
                  alt={showPassword ? "Hide password" : "Show password"}
                  className="h-5 w-5"
                />
              </button>
            </div>
          </div>
          <div className="flex justify-end">
            <a href="#" className="text-xs text-purple-600 font-semibold hover:underline transition">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r mb-10 cursor-pointer from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-bold py-3 rounded-xl shadow-lg transition text-lg mt-2"
          >
            Sign In
          </button>
        </form>
        {/* <p className="mt-8 text-sm text-gray-500 z-10">
          Don't have an account?{" "}
          <a href="#" className="text-purple-600 font-semibold hover:underline">
            Sign up
          </a>
        </p> */}
      </div>
    </div>
  );
};

export default Login;