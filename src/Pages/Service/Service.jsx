import React from 'react'

const Service = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-700 to-slate-500 text-white h-screen flex items-center justify-center">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-12 flex flex-col items-center max-w-lg w-full animate-fade-in">
        <svg className="w-20 h-20 mb-6 text-blue-400 animate-spin" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487a9 9 0 11-9.724 0M12 2v10" />
        </svg>
        <h1 className="text-4xl font-extrabold mb-3 text-center drop-shadow-lg">Our Services</h1>
        <p className="text-base text-slate-100 text-center mb-2">
          Discover the range of services we offer to help you succeed in your academic and professional journey.
        </p>
        <p className="text-lg text-slate-200 text-center mb-6">
          The Service page is under construction.<br />
          We are working hard to bring you something awesome.
        </p>
        <button className="px-6 py-2 bg-blue-400 text-slate-900 font-semibold rounded-full shadow hover:bg-blue-300 transition">
          Back to Home
        </button>
        <span className="text-xs text-slate-400 mt-4">Stay tuned for updates 🚀</span>
      </div>
    </div>
  )
}

export default Service