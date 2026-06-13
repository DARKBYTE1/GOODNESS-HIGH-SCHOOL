import React from 'react';

const LatestActivities: React.FC = () => {
  const activities = [
    { id: 1, user: 'John Doe', action: 'Added new student', time: '5 minutes ago' },
    { id: 2, user: 'Jane Smith', action: 'Posted announcement', time: '1 hour ago' },
    { id: 3, user: 'Admin', action: 'Generated report', time: '2 hours ago' }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6 lg:col-span-2">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Latest Activities</h3>
      <div className="space-y-4">
        {activities.map(activity => (
          <div key={activity.id} className="flex items-center justify-between border-b pb-3 last:border-b-0">
            <div>
              <p className="font-medium text-gray-900">{activity.action}</p>
              <p className="text-sm text-gray-500">{activity.user}</p>
            </div>
            <p className="text-sm text-gray-500">{activity.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestActivities;
