import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const purchaseVolumeData = [
  { name: 'Jan', volume: 150000 },
  { name: 'Feb', volume: 170000 },
  { name: 'Mar', volume: 160000 },
  { name: 'Apr', volume: 190000 },
  { name: 'May', volume: 180000 },
];

const PurchaseVolumeChart = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Purchase Volume</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={purchaseVolumeData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Line type="monotone" dataKey="volume" stroke="#8884d8" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PurchaseVolumeChart;