import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const itemPurchaseData = [
  { name: 'Printer 100', value: 1500, fill: '#8884d8' },
  { name: 'License 200', value: 1200, fill: '#82ca9d' },
  { name: 'Monitor 300', value: 900, fill: '#a4de6c' },
  { name: 'Mouse 400', value: 700, fill: '#d0ed57' },
];

const ItemPurchaseChart = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Item Purchase</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={itemPurchaseData} layout="vertical" barCategoryGap="20%">
            <XAxis type="number" hide />
            <YAxis type="category" dataKey="name" width={10} hide />
            <Tooltip />
            <Bar dataKey="value" barSize={15} radius={[0, 10, 10, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-sm">
        {itemPurchaseData.map((entry, index) => (
          <div key={index} className="flex items-center mb-1">
            <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: entry.fill }}></span>
            {entry.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemPurchaseChart;