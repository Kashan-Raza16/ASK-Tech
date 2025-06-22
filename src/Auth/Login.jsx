import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import yogaWoman from '../assets/img/Yoga-women.png'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UXError from '../UX/Error'; 

// Demo credentials
const DEMO_EMAIL = "user@ask.com";
const DEMO_PASSWORD = "ask123";

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState('');
  const [hasError, setHasError] = useState(false); // <-- Error state
  const navigate = useNavigate();

  // Function to handle login
  const handleLogin = (e) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        setMessage('Please enter both email and password.');
        toast.error('Please enter both email and password.', { position: "top-right" });
        return;
      }
      if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
        setMessage('');
        toast.success('Login successful! Redirecting...', { position: "top-right" });
        setTimeout(() => {
          navigate('/dashboard');
        }, 1200);
      } else {
        setMessage('Invalid email or password. Try demo@asktech.com / demo1234');
        toast.error('Invalid email or password.', { position: "top-right" });
      }
    } catch (error) {
      setHasError(true); // <-- Set error if something goes wrong
    }
  };

  if (hasError) {
    return <UXError />; // <-- Show UXError component on error
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-gray-100 font-inter">
      <ToastContainer />
      <div className="flex flex-col lg:flex-row bg-white rounded-3xl shadow-xl overflow-hidden max-w-4xl w-full">
        {/* Left Section: Image and Gradient */}
        <div className="relative w-full lg:w-1/2 bg-gradient-to-br from-green-50 to-blue-50 p-8 flex items-center justify-center rounded-l-3xl rounded-tr-none lg:rounded-tr-none lg:rounded-bl-3xl">
          <img
            src={yogaWoman}
            alt="Woman meditating"
            className="w-full h-auto object-contain rounded-xl shadow-lg"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x400/D0F0C0/333333?text=Image+Not+Found"; }}
          />
          <div className="absolute top-4 right-4 text-sm text-gray-700">
            {/* You can add a subtle butterfly or nature icon here if needed */}
          </div>
        </div>

        {/* Right Section: Login Form */}
        <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          {/* <div className="text-right mb-8">
            <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors shadow-sm">
              Sign up
            </button>
          </div> */}

          <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome back!</h2>
          <p className="text-gray-500 mb-8">Enter your email and password</p>
          <div className="mb-4 text-xs text-gray-400">
            {/* <span className="font-semibold">Demo:</span> <span>{DEMO_EMAIL} / {DEMO_PASSWORD}</span> */}
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  {/* Mail icon */}
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 13V3"></path>
                  </svg>
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-all"
                  placeholder="demo@asktech.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  {/* Lock icon */}
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </span>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-all"
                  placeholder="demo1234"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500 cursor-pointer"
                />
                <label htmlFor="rememberMe" className="ml-2 text-gray-700">
                  Remember me
                </label>
              </div>
              <a href="#" className="font-medium text-red-500 hover:text-red-600 transition-colors">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-green-400 to-green-600 text-white cursor-pointer font-semibold rounded-xl shadow-lg hover:from-green-500 hover:to-green-700 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-green-300"
            >
              Login
            </button>
          </form>

          {/* <div className="flex items-center justify-center my-6">
            <span className="text-gray-400 text-sm">or login with</span>
          </div>

          <div className="flex justify-center space-x-4">
            <button className="flex items-center justify-center px-6 py-3 border border-gray-300 rounded-xl shadow-sm text-gray-700 hover:bg-gray-50 transition-colors">
              <img
                src="https://img.icons8.com/color/16/000000/google-logo.png"
                alt="Google logo"
                className="w-4 h-4 mr-2"
              />
              Google
            </button>
            <button className="flex items-center justify-center px-6 py-3 border border-gray-300 rounded-xl shadow-sm text-gray-700 hover:bg-gray-50 transition-colors">
              <img
                src="https://img.icons8.com/color/16/000000/facebook-new.png"
                alt="Facebook logo"
                className="w-4 h-4 mr-2"
              />
              Facebook
            </button>
          </div> */}

          {/* {message && (
            <div className="mt-6 p-3 bg-blue-100 text-blue-800 rounded-lg text-center">
              {message}
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default App;
