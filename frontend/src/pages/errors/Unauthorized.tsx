import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const Unauthorized: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">403</h1>
        <p className="text-2xl font-semibold text-gray-900 mb-2">Access Denied</p>
        <p className="text-gray-600 mb-8 max-w-md">You do not have permission to access this resource. Please contact your administrator if you believe this is an error.</p>
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
        >
          <FiArrowLeft className="w-5 h-5 mr-2" />
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Unauthorized;
