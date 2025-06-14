import React from 'react'

export const StudentHero = () => {
  return (
    <div className="bg-gradient-to-br from-slate-200 via-slate-400 to-slate-800 text-white h-screen flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-10 flex flex-col items-center max-w-md w-full animate-fade-in">
        <svg
          className="w-16 h-16 mb-4 text-yellow-400 animate-bounce"
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
        <h1 className="text-4xl font-extrabold mb-2 text-center drop-shadow-lg">
          Student Section
        </h1>
        <p className="text-base text-slate-100 text-center mb-2">
          Welcome to the future of student empowerment at ASK-Tech!
        </p>
        <p className="text-lg text-slate-200 text-center mb-4">
          The Student Section page is under construction.<br />
          We are working hard to bring you something awesome.
        </p>
        <button className="mt-2 px-6 py-2 bg-yellow-400 text-slate-900 font-semibold rounded-full shadow hover:bg-yellow-300 transition">
          Back to Home
        </button>
        <span className="text-xs text-slate-400 mt-4">
          Stay tuned for updates 🚀
        </span>
      </div>
    </div>
  )
}

export default StudentHero