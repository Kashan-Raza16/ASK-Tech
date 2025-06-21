import React from 'react';
import { Search, Bell, Settings } from 'lucide-react';

const DashHeader = () => {
  return (
    <header className="flex justify-between items-center bg-white p-5 rounded-xl shadow-md mb-8">
      <div className="relative flex items-center w-64">
        <Search className="absolute left-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
      </div>
      <div className="flex items-center space-x-4">
        <Bell className="text-gray-500 hover:text-blue-500 cursor-pointer" />
        <Settings className="text-gray-500 hover:text-blue-500 cursor-pointer" />
        <div className="flex items-center space-x-2">
          <img
            src="https://placehold.co/40x40/cbd5e1/000000?text=JD"
            alt="User Avatar"
            className="w-10 h-10 rounded-full border-2 border-blue-400"
          />
          <span className="font-semibold text-gray-700">John Doe</span>
        </div>
      </div>
    </header>
  );
};

export default DashHeader;