import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from './store';

// Layouts
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';

// Pages
import Dashboard from './pages/Dashboard';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';

// Super Admin Pages
import SuperAdminDashboard from './pages/super-admin/Dashboard';
import SchoolManagement from './pages/super-admin/SchoolManagement';
import FranchiseManagement from './pages/super-admin/FranchiseManagement';
import UserManagement from './pages/super-admin/UserManagement';
import AuditLogs from './pages/super-admin/AuditLogs';
import SystemConfiguration from './pages/super-admin/SystemConfiguration';

// Student Pages
import StudentList from './pages/students/StudentList';
import StudentProfile from './pages/students/StudentProfile';
import StudentResults from './pages/students/StudentResults';
import StudentAttendance from './pages/students/StudentAttendance';

// Staff Pages
import StaffList from './pages/staff/StaffList';
import StaffProfile from './pages/staff/StaffProfile';

// Academic Pages
import ClassManagement from './pages/academic/ClassManagement';
import ExamManagement from './pages/academic/ExamManagement';
import ResultManagement from './pages/academic/ResultManagement';

// Finance Pages
import FeeManagement from './pages/finance/FeeManagement';
import PaymentTracking from './pages/finance/PaymentTracking';
import PayrollManagement from './pages/finance/PayrollManagement';

// Reports Pages
import ReportsCenter from './pages/reports/ReportsCenter';

// Attendance Pages
import AttendanceMarking from './pages/attendance/AttendanceMarking';
import AttendanceReports from './pages/attendance/AttendanceReports';

// Error Pages
import NotFound from './pages/errors/NotFound';
import Unauthorized from './pages/errors/Unauthorized';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Auth Routes */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
          </Route>

          {/* Main Routes */}
          <Route element={<MainLayout />}>
            {/* Dashboard */}
            <Route path="/dashboard" element={<Dashboard />} />

            {/* Super Admin Routes */}
            <Route path="/super-admin/dashboard" element={<SuperAdminDashboard />} />
            <Route path="/super-admin/schools" element={<SchoolManagement />} />
            <Route path="/super-admin/franchises" element={<FranchiseManagement />} />
            <Route path="/super-admin/users" element={<UserManagement />} />
            <Route path="/super-admin/audit-logs" element={<AuditLogs />} />
            <Route path="/super-admin/configuration" element={<SystemConfiguration />} />

            {/* Student Routes */}
            <Route path="/students" element={<StudentList />} />
            <Route path="/students/:id" element={<StudentProfile />} />
            <Route path="/students/results" element={<StudentResults />} />
            <Route path="/students/attendance" element={<StudentAttendance />} />

            {/* Staff Routes */}
            <Route path="/staff" element={<StaffList />} />
            <Route path="/staff/:id" element={<StaffProfile />} />

            {/* Academic Routes */}
            <Route path="/academics/classes" element={<ClassManagement />} />
            <Route path="/academics/exams" element={<ExamManagement />} />
            <Route path="/academics/results" element={<ResultManagement />} />

            {/* Finance Routes */}
            <Route path="/finance/fees" element={<FeeManagement />} />
            <Route path="/finance/payments" element={<PaymentTracking />} />
            <Route path="/finance/payroll" element={<PayrollManagement />} />

            {/* Reports Routes */}
            <Route path="/reports" element={<ReportsCenter />} />

            {/* Attendance Routes */}
            <Route path="/attendance/mark" element={<AttendanceMarking />} />
            <Route path="/attendance/reports" element={<AttendanceReports />} />
          </Route>

          {/* Error Routes */}
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Provider>
  );
}

export default App;
