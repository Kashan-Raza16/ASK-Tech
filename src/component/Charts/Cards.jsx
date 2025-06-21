import React from 'react';

const Card = ({ title, value, change, color, iconBg, icon }) => (
  <div className="bg-white p-5 rounded-xl shadow-md flex flex-col items-start">
    <div className={`p-3 rounded-full mb-3 ${iconBg}`}>
      {icon}
    </div>
    <p className="text-sm text-gray-500 mb-1">{title}</p>
    <p className="text-2xl font-bold text-gray-900 mb-2">{value}</p>
    <p className={`text-xs ${color} font-medium`}>
      {change.includes('Up') ? (
        <span className="flex items-center">
          <ChevronUp className="w-3 h-3 inline mr-1" />
          {change} from past week
        </span>
      ) : (
        <span className="flex items-center">
          <ChevronDown className="w-3 h-3 inline mr-1" />
          {change} from yesterday
        </span>
      )}
    </p>
  </div>
);

export default Card;