import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A281E1', '#8884d8', '#82ca9d'];

const UserByLocationChart = (props) => {
  // Ensure data is always an array to avoid .map errors
  const data = Array.isArray(props.data) ? props.data : [];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex flex-col">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">User by Location</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-4 text-sm">
        {data.length > 0 ? (
          data.map((entry, index) => (
            <div key={index} className="flex justify-between items-center mb-1">
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }}></span>
                {entry.name}
              </div>
              <span className="font-medium">{entry.value}%</span>
            </div>
          ))
        ) : (
          <p>No location data available.</p>
        )}
      </div>
    </div>
  );
};

export default UserByLocationChart;