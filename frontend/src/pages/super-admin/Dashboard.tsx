import React from 'react';
import StatCard from '../../components/common/StatCard';
import { FiUsers, FiHome, FiTrendingUp, FiAlertCircle } from 'react-icons/fi';

const SuperAdminDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Super Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Schools"
          value="45"
          icon={<FiHome className="w-6 h-6" />}
          trend={{ value: 8, isPositive: true }}
          color="blue"
        />
        <StatCard
          title="Active Users"
          value="2,845"
          icon={<FiUsers className="w-6 h-6" />}
          trend={{ value: 12, isPositive: true }}
          color="green"
        />
        <StatCard
          title="Total Revenue"
          value="₦45.2M"
          icon={<FiTrendingUp className="w-6 h-6" />}
          trend={{ value: 15, isPositive: true }}
          color="purple"
        />
        <StatCard
          title="System Alerts"
          value="3"
          icon={<FiAlertCircle className="w-6 h-6" />}
          trend={{ value: 2, isPositive: false }}
          color="orange"
        />
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">System Overview</h2>
        <p className="text-gray-600">Super Admin Dashboard Content - Under Development</p>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
