import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FiHome,
  FiUsers,
  FiBook,
  FiDollarSign,
  FiBarChart3,
  FiSettings,
  FiChevronDown,
  FiChevronRight
} from 'react-icons/fi';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const [expandedMenu, setExpandedMenu] = React.useState<string | null>(null);

  const menuItems = [
    { label: 'Dashboard', path: '/dashboard', icon: FiHome },
    {
      label: 'Super Admin',
      icon: FiSettings,
      submenu: [
        { label: 'Dashboard', path: '/super-admin/dashboard' },
        { label: 'Schools', path: '/super-admin/schools' },
        { label: 'Franchises', path: '/super-admin/franchises' },
        { label: 'Users', path: '/super-admin/users' },
        { label: 'Audit Logs', path: '/super-admin/audit-logs' },
        { label: 'Configuration', path: '/super-admin/configuration' }
      ]
    },
    {
      label: 'Students',
      icon: FiUsers,
      submenu: [
        { label: 'List', path: '/students' },
        { label: 'Results', path: '/students/results' },
        { label: 'Attendance', path: '/students/attendance' }
      ]
    },
    {
      label: 'Academics',
      icon: FiBook,
      submenu: [
        { label: 'Classes', path: '/academics/classes' },
        { label: 'Exams', path: '/academics/exams' },
        { label: 'Results', path: '/academics/results' }
      ]
    },
    {
      label: 'Finance',
      icon: FiDollarSign,
      submenu: [
        { label: 'Fees', path: '/finance/fees' },
        { label: 'Payments', path: '/finance/payments' },
        { label: 'Payroll', path: '/finance/payroll' }
      ]
    },
    { label: 'Reports', path: '/reports', icon: FiBarChart3 }
  ];

  return (
    <aside className={`${isOpen ? 'w-64' : 'w-20'} bg-gray-900 text-white transition-all duration-300 overflow-y-auto`}>
      {/* Logo */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold">G</div>
          {isOpen && <span className="font-bold text-lg">GOODNESS</span>}
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item, index) => {
          const hasSubmenu = 'submenu' in item;
          const isActive = location.pathname === item.path || (hasSubmenu && item.submenu?.some(sub => location.pathname === sub.path));
          const Icon = item.icon;

          return (
            <div key={index}>
              {hasSubmenu ? (
                <button
                  onClick={() => setExpandedMenu(expandedMenu === item.label ? null : item.label)}
                  className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                    isActive ? 'bg-blue-600' : 'hover:bg-gray-800'
                  }`}
                >
                  <Icon size={20} />
                  {isOpen && (
                    <>
                      <span className="flex-1 text-left">{item.label}</span>
                      {expandedMenu === item.label ? <FiChevronDown /> : <FiChevronRight />}
                    </>
                  )}
                </button>
              ) : (
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                    isActive ? 'bg-blue-600' : 'hover:bg-gray-800'
                  }`}
                >
                  <Icon size={20} />
                  {isOpen && <span>{item.label}</span>}
                </Link>
              )}

              {/* Submenu */}
              {hasSubmenu && expandedMenu === item.label && isOpen && (
                <div className="ml-4 space-y-1 mt-2">
                  {item.submenu?.map((subitem, subindex) => (
                    <Link
                      key={subindex}
                      to={subitem.path}
                      className={`block px-4 py-2 rounded-lg text-sm transition-colors ${
                        location.pathname === subitem.path ? 'bg-blue-600' : 'hover:bg-gray-800'
                      }`}
                    >
                      {subitem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
