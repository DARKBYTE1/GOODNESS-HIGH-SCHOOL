import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import StatCard from '../components/common/StatCard';
import AreaChart from '../components/charts/AreaChart';
import BarChart from '../components/charts/BarChart';
import LatestActivities from '../components/dashboard/LatestActivities';
import QuickActions from '../components/dashboard/QuickActions';
import { FiUsers, FiBook, FiDollarSign, FiCheckCircle } from 'react-icons/fi';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.auth);

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-900 text-white p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold">Welcome, {user?.firstName}!</h1>
        <p className="text-blue-100">Here's what's happening with your school today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Students"
          value="1,245"
          icon={<FiUsers className="w-6 h-6" />}
          trend={{ value: 12, isPositive: true }}
          color="blue"
        />
        <StatCard
          title="Active Classes"
          value="32"
          icon={<FiBook className="w-6 h-6" />}
          trend={{ value: 5, isPositive: true }}
          color="green"
        />
        <StatCard
          title="Fee Collection"
          value="₦2.5M"
          icon={<FiDollarSign className="w-6 h-6" />}
          trend={{ value: 8, isPositive: true }}
          color="purple"
        />
        <StatCard
          title="Attendance Rate"
          value="95%"
          icon={<FiCheckCircle className="w-6 h-6" />}
          trend={{ value: 2, isPositive: false }}
          color="orange"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AreaChart title="Student Enrollment Trend" />
        <BarChart title="Fee Collection This Month" />
      </div>

      {/* Quick Actions and Latest Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <QuickActions />
        <LatestActivities />
      </div>
    </div>
  );
};

export default Dashboard;
