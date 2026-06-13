# GOODNESS HIGH SCHOOL - School Management System (SMS)

**A Comprehensive Nigerian School Management System** designed for Nursery, Primary, Secondary, Colleges, and Tutorial Centres.

## 🎓 Project Overview

This is a complete, production-ready SMS that covers:
- ✅ Dashboard & Analytics
- ✅ Super Admin Dashboard (Multi-School Management)
- ✅ Student Management (Admission, Registration, Records)
- ✅ Staff Management
- ✅ Parent Portal
- ✅ Class Management
- ✅ Attendance (Manual, QR Code, Biometric)
- ✅ Examination & CBT Platform
- ✅ Result Management (Nigerian Grading System)
- ✅ Report Cards
- ✅ Fee Management (Paystack, Flutterwave, Moniepoint)
- ✅ Payroll System
- ✅ Accounting & Financial Reports
- ✅ LMS (E-Learning)
- ✅ Library Management
- ✅ Hostel Management
- ✅ Transport Management
- ✅ Communication System (SMS, Email, WhatsApp)
- ✅ Mobile Apps (Android/iOS)
- ✅ Multi-School Management
- ✅ Franchise Management

## 🚀 Tech Stack

**Backend:**
- Node.js + Express.js
- Python + Django (for AI features)
- PostgreSQL Database
- Redis Cache
- Docker & Kubernetes

**Frontend:**
- React.js + TypeScript
- Next.js (for SSR)
- Tailwind CSS
- Redux for State Management

**Mobile:**
- React Native
- Flutter (Alternative)

**DevOps:**
- Docker
- GitHub Actions
- AWS/Digital Ocean

## 📁 Project Structure

```
GOODNESS-HIGH-SCHOOL/
├── backend/                    # Node.js Backend
│   ├── src/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   └── (auth routes)
│   │   │   ├── super-admin/    # Super Admin Features
│   │   │   │   ├── school-management/
│   │   │   │   ├── branch-management/
│   │   │   │   ├── franchise-management/
│   │   │   │   ├── user-roles/
│   │   │   │   ├── audit-logs/
│   │   │   │   ├── backup-system/
│   │   │   │   └── reports/
│   │   │   ├── students/
│   │   │   ├── staff/
│   │   │   ├── classes/
│   │   │   ├── attendance/
│   │   │   ├── exams/
│   │   │   ├── results/
│   │   │   ├── fees/
│   │   │   ├── payroll/
│   │   │   ├── communications/
│   │   │   └── reports/
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── School.js
│   │   │   ├── Student.js
│   │   │   ├── Staff.js
│   │   │   └── (other models)
│   │   ├── middleware/
│   │   │   ├── auth.js
│   │   │   ├── rbac.js         # Role-based access control
│   │   │   ├── audit.js
│   │   │   └── (other middleware)
│   │   ├── config/
│   │   ├── utils/
│   │   └── app.js
│   ├── migrations/
│   ├── tests/
│   ├── .env.example
│   ├── package.json
│   └── Dockerfile
├── frontend/                   # React Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── dashboard/
│   │   │   ├── super-admin/    # Super Admin Pages
│   │   │   │   ├── SchoolManagement.tsx
│   │   │   │   ├── BranchManagement.tsx
│   │   │   │   ├── FranchiseManagement.tsx
│   │   │   │   ├── UserRoles.tsx
│   │   │   │   ├── AuditLogs.tsx
│   │   │   │   └── AnalyticsReports.tsx
│   │   │   ├── students/
│   │   │   ├── staff/
│   │   │   ├── exams/
│   │   │   └── (other pages)
│   │   ├── store/
│   │   ├── utils/
│   │   ├── hooks/
│   │   └── App.tsx
│   ├── public/
│   ├── package.json
│   └── Dockerfile
├── mobile/                     # React Native Mobile App
│   ├── src/
│   └── package.json
├── database/                   # Database Schema & Migrations
│   ├── schema.sql
│   └── migrations/
├── docs/                       # Documentation
│   ├── API_DOCUMENTATION.md
│   ├── DATABASE_SCHEMA.md
│   ├── INSTALLATION.md
│   ├── DEPLOYMENT.md
│   ├── SUPER_ADMIN_GUIDE.md
│   └── SECURITY.md
├── docker-compose.yml
├── .github/workflows/          # CI/CD Pipelines
├── .env.example
└── README.md
```

## 🔐 Super Admin Features

The Super Admin module includes:

### 1. Multi-School Management
- Create and manage multiple schools
- School profiles and configurations
- Branch management
- School settings and customization

### 2. Franchise Management
- Franchise registration and approval
- Franchise tracking
- Franchise performance metrics
- Franchise financial reporting

### 3. User & Role Management
- Create custom roles
- Assign permissions
- School admin management
- User access control
- Two-factor authentication settings

### 4. Audit & Security
- Complete audit logging
- User activity tracking
- System event logging
- Security breach alerts
- Data access monitoring

### 5. Backup & Recovery
- Automated database backups
- Scheduled backups
- Point-in-time recovery
- Backup verification
- Disaster recovery plans

### 6. System Analytics & Reports
- Multi-school performance analytics
- Cross-school comparisons
- Financial aggregation reports
- Student performance trends
- Staff productivity metrics

### 7. Configuration Management
- System settings
- Email templates
- SMS templates
- Payment gateway settings
- API integrations

## 🎯 User Roles & Permissions

```
Super Admin (Root Access)
├── School Admin
│   ├── Principal
│   ├── Vice Principal
│   ├── Head of Department
│   ├── Class Teacher
│   └── Subject Teacher
├── Staff
│   ├── Administrative Staff
│   ├── Support Staff
│   ├── Security
│   ├── Drivers
│   └── Cleaners
├── Students
└── Parents/Guardians
```

## 📊 Nigerian Grading System Implemented

| Score | Grade | Remark |
|-------|-------|--------|
| 75-100 | A1 | Excellent |
| 70-74 | B2 | Very Good |
| 65-69 | B3 | Good |
| 60-64 | C4 | Credit |
| 55-59 | C5 | Credit |
| 50-54 | C6 | Credit |
| 45-49 | D7 | Pass |
| 40-44 | E8 | Pass |
| 0-39 | F9 | Fail |

## 💳 Payment Integration

- ✅ Paystack
- ✅ Flutterwave
- ✅ Moniepoint
- ✅ Bank Transfer
- ✅ Cash Payment

## 📱 Features

### Dashboard
- Real-time overview of school statistics
- Quick access to key information
- Charts and analytics
- Notification center

### Student Management
- Complete student lifecycle management
- Admission portal with online application
- ID card generation with QR codes
- Transfer and suspension records
- Alumni management

### Attendance
- Multiple attendance methods (Manual, QR Code, Biometric)
- Real-time attendance reports
- Parent notifications

### Examination & Results
- CBT (Computer-Based Testing) Platform
- Question bank management
- Automated marking
- Result processing with Nigerian grading system

### Financial Management
- Complete accounting system
- Payroll processing
- Financial reports (P&L, Cash Flow, Balance Sheet)

### Communication
- SMS notifications
- Email alerts
- In-app messaging
- WhatsApp integration

### Mobile App
- Student app for checking results, attendance
- Parent app for monitoring child's progress
- Teacher app for marking attendance, uploading results
- Staff app for time tracking

## 🔐 Security Features

- JWT authentication
- Role-based access control (RBAC)
- Two-factor authentication
- Data encryption
- Regular backups
- Audit logs
- GDPR/CCPA compliance
- API rate limiting
- CORS protection
- SQL injection prevention
- XSS protection

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v18+)
- PostgreSQL (v14+)
- Docker & Docker Compose
- Git

### Quick Start

```bash
# Clone the repository
git clone https://github.com/DARKBYTE1/GOODNESS-HIGH-SCHOOL.git
cd GOODNESS-HIGH-SCHOOL

# Setup with Docker Compose (Recommended)
docker-compose up -d

# Or Manual Setup
# 1. Backend
cd backend
npm install
cp .env.example .env
npm run migrate
npm start

# 2. Frontend (in another terminal)
cd frontend
npm install
npm start

# Application will be available at http://localhost:3000
```

## 🎯 Super Admin Login

**Default Super Admin Credentials:**
- Email: `superadmin@goodness-sms.com`
- Password: `SuperAdmin@123` (Change immediately after first login)

## 🎨 Advanced Features

- AI-powered result analysis
- AI-generated report comments
- Machine learning for student performance prediction
- Advanced analytics and reporting
- Multi-school/branch management
- Franchise management system
- Digital transcript generation
- QR code verification for certificates

## 📖 Documentation

Detailed documentation is available in the `/docs` folder:
- [API Documentation](./docs/API_DOCUMENTATION.md)
- [Database Schema](./docs/DATABASE_SCHEMA.md)
- [Installation Guide](./docs/INSTALLATION.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)
- [Super Admin Guide](./docs/SUPER_ADMIN_GUIDE.md)
- [Security Guide](./docs/SECURITY.md)

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

## 📄 License

MIT License - see LICENSE file for details

## 📞 Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

**Version:** 1.0.0  
**Last Updated:** June 2026  
**Maintained by:** DARKBYTE1