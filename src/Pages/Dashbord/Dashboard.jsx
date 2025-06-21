import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-purple-700">Dashboard</h1>
          <button className="px-5 py-2 bg-purple-600 text-white rounded-lg font-semibold shadow hover:bg-purple-700 transition">
            Log out
          </button>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-2xl font-bold text-purple-600">12</span>
            <span className="text-gray-500 mt-2">Projects</span>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-2xl font-bold text-pink-500">8</span>
            <span className="text-gray-500 mt-2">Tasks</span>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-2xl font-bold text-green-500">5</span>
            <span className="text-gray-500 mt-2">Completed</span>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-2xl font-bold text-yellow-500">3</span>
            <span className="text-gray-500 mt-2">Pending</span>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Activity</h2>
          <ul className="divide-y divide-gray-100">
            <li className="py-3 flex items-center justify-between">
              <span className="text-gray-700">Created new project <b>Smart Save</b></span>
              <span className="text-xs text-gray-400">2 hours ago</span>
            </li>
            <li className="py-3 flex items-center justify-between">
              <span className="text-gray-700">Completed task <b>UI Design</b></span>
              <span className="text-xs text-gray-400">5 hours ago</span>
            </li>
            <li className="py-3 flex items-center justify-between">
              <span className="text-gray-700">Added comment to <b>Project Alpha</b></span>
              <span className="text-xs text-gray-400">1 day ago</span>
            </li>
            <li className="py-3 flex items-center justify-between">
              <span className="text-gray-700">Marked <b>API Integration</b> as pending</span>
              <span className="text-xs text-gray-400">2 days ago</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;