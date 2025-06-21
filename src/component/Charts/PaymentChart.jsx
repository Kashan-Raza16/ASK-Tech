import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const paymentData = [
  { name: 'Jan', amount: 20000 },
  { name: 'Feb', amount: 22000 },
  { name: 'Mar', amount: 25000 },
  { name: 'Apr', amount: 23000 },
  { name: 'May', amount: 27000 },
];

const PaymentChart = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment</h3>
      <div className="h-64">
        <LineChart data={paymentData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip />
          <Line type="monotone" dataKey="amount" stroke="#FF7300" strokeWidth={3} dot={false} />
        </LineChart>
      </div>
    </div>
  );
};

export default PaymentChart;