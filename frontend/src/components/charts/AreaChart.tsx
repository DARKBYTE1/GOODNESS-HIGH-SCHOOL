import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface AreaChartProps {
  title: string;
}

const AreaChart: React.FC<AreaChartProps> = ({ title }) => {
  const data = [
    { month: 'Jan', students: 400 },
    { month: 'Feb', students: 520 },
    { month: 'Mar', students: 480 },
    { month: 'Apr', students: 610 },
    { month: 'May', students: 730 },
    { month: 'Jun', students: 850 }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="students" stroke="#3B82F6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChart;
