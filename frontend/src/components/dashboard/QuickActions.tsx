import React from 'react';
import { FiFileText, FiDownload, FiEye } from 'react-icons/fi';

const QuickActions: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
      <div className="space-y-3">
        <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
          <FiFileText className="text-blue-600" size={20} />
          <span>Generate Report</span>
        </button>
        <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
          <FiDownload className="text-green-600" size={20} />
          <span>Export Data</span>
        </button>
        <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
          <FiEye className="text-purple-600" size={20} />
          <span>View Analytics</span>
        </button>
      </div>
    </div>
  );
};

export default QuickActions;
