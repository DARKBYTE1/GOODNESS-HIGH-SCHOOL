# Super Admin Guide - GOODNESS High School SMS

## Table of Contents
1. [Overview](#overview)
2. [Super Admin Dashboard](#super-admin-dashboard)
3. [Multi-School Management](#multi-school-management)
4. [Franchise Management](#franchise-management)
5. [User & Role Management](#user--role-management)
6. [Audit & Security](#audit--security)
7. [Backup & Recovery](#backup--recovery)
8. [System Configuration](#system-configuration)
9. [Advanced Features](#advanced-features)

---

## Overview

The Super Admin module is designed for administrators who manage multiple schools, franchises, and users across the entire GOODNESS SMS platform.

### Default Super Admin Credentials

```
Email: superadmin@goodness-sms.com
Password: SuperAdmin@123
```

⚠️ **IMPORTANT:** Change the password immediately after first login.

### Access Levels

```
Super Admin (Root Level)
├── Full system access
├── Multi-school management
├── Franchise management
├── User & role management
├── Audit logging
├── System configuration
└── Backup & recovery
```

---

## Super Admin Dashboard

The Super Admin Dashboard provides a comprehensive overview of the entire platform.

### Dashboard Widgets

1. **System Statistics**
   - Total Schools
   - Total Active Users
   - Total Students (across all schools)
   - Total Staff Members
   - System Uptime

2. **Financial Overview**
   - Total Revenue (all schools)
   - Outstanding Fees
   - Payroll Expenses
   - Monthly Trends

3. **User Activity**
   - Active Users per School
   - Login attempts
   - System access logs
   - Suspicious activities

4. **System Health**
   - Database status
   - Storage usage
   - API performance
   - Error rates

5. **Quick Actions**
   - Create new school
   - Add franchise
   - Create user accounts
   - View audit logs
   - Download reports

---

## Multi-School Management

### Creating a New School

1. Navigate to **Settings > Schools > Create School**
2. Fill in the following information:
   - School Name
   - School Code
   - School Type (Nursery, Primary, Secondary, College, Tutorial Centre)
   - Address
   - City/State
   - Phone Number
   - Email
   - Website (optional)
   - School Logo
   - School Registration Certificate

3. Configure:
   - Academic Calendar
   - Terms and Sessions
   - Academic Levels (Classes)
   - Grading System
   - Fees Structure

4. Assign:
   - School Administrator
   - Principal
   - Vice Principal

5. Click **Create School**

### School Management Functions

#### View All Schools
- Access the Schools List
- Filter by status (Active, Inactive, Suspended)
- Search by school name or code
- View key metrics for each school

#### Edit School Information
1. Select the school
2. Click **Edit**
3. Modify settings as needed
4. Save changes

#### Manage School Administrators
- Add/Remove admin users
- Assign roles and permissions
- Reset admin passwords
- View admin activity logs

#### School Statistics
- Student enrollment trends
- Staff count
- Revenue and expenses
- Academic performance
- System usage

#### Suspend/Deactivate School
1. Select the school
2. Click **Manage**
3. Choose **Suspend** or **Deactivate**
4. Provide reason for suspension
5. Confirm action

---

## Franchise Management

### Franchise Registration

1. Navigate to **Settings > Franchises > New Franchise**
2. Fill in franchise information:
   - Franchise Name
   - Franchise Code
   - Franchise Owner Name
   - Contact Email
   - Phone Number
   - Address
   - Proposed Location
   - Number of Schools (planned)

3. Upload documents:
   - ID/Passport Copy
   - Business Registration
   - Initial Agreement
   - Proof of Capital

4. Set franchise details:
   - Franchise Fee
   - Package Type (Basic, Pro, Premium)
   - Contract Duration
   - Start Date
   - Terms and Conditions

5. Click **Submit for Approval**

### Franchise Approval Workflow

```
Applications (New)
    ↓
Review & Verification
    ↓
Approved / Rejected
    ↓
Active (if approved)
```

### Franchise Dashboard

View comprehensive metrics:
- Schools under franchise
- Total students
- Monthly revenue
- Staff count
- Performance ratings
- Compliance status

### Franchise Performance Reports

- Academic performance comparison
- Financial health metrics
- User satisfaction surveys
- Compliance checklist
- Growth trends

### Franchise Renewal

1. Navigate to franchise details
2. Click **Manage Contract**
3. Set renewal terms
4. Send renewal notification to franchise owner
5. Track renewal status

---

## User & Role Management

### Default Roles

```
1. Super Admin
   - Full system access
   - All permissions enabled
   - Cannot be deleted

2. School Admin
   - Manage single school
   - Create staff and students
   - View reports
   - Cannot access other schools

3. Principal
   - Academic oversight
   - Staff management
   - Student discipline
   - Cannot change school settings

4. Vice Principal
   - Academic support
   - Attendance monitoring
   - Report generation
   - Limited admin functions

5. Head of Department
   - Department management
   - Subject coordination
   - Result submission
   - Staff evaluation

6. Class Teacher
   - Class management
   - Attendance marking
   - Result submission
   - Parent communication

7. Subject Teacher
   - Subject teaching
   - Student assessment
   - Result recording
   - Homework assignment

8. Administrative Staff
   - Data entry
   - Record keeping
   - General admin tasks
   - Document management

9. Support Staff
   - Technical support
   - System maintenance
   - User assistance
   - Troubleshooting
```

### Creating Custom Roles

1. Navigate to **Settings > Roles & Permissions**
2. Click **Create New Role**
3. Enter role name and description
4. Select permissions:
   - Dashboard Access
   - Student Management
   - Staff Management
   - Exam Management
   - Result Management
   - Financial Management
   - Communication
   - Reports
   - Settings

5. Set permission level (View, Create, Edit, Delete)
6. Click **Create Role**

### User Account Management

#### Create User Account
1. Navigate to **User Management > Create Account**
2. Enter user details:
   - First Name
   - Last Name
   - Email
   - Phone Number
   - Username
   - Initial Password
3. Assign role
4. Assign school
5. Enable 2FA if required
6. Click **Create Account**

#### Reset User Password
1. Select user from list
2. Click **Reset Password**
3. Generate temporary password
4. User will be notified via email
5. User must change password on first login

#### Deactivate User Account
1. Select user
2. Click **Manage Account**
3. Choose **Deactivate**
4. Confirm action
5. Account becomes inactive but data is preserved

#### Delete User Account
1. Select user
2. Click **Manage Account**
3. Choose **Delete**
4. Confirm deletion
5. User data is archived

---

## Audit & Security

### Audit Logs

View detailed logs of all system activities:

1. Navigate to **Settings > Audit Logs**
2. View entries with timestamps
3. Filter by:
   - Date Range
   - User
   - Action Type
   - School
   - Status

4. Export logs as CSV/PDF

### Activity Types Logged

- User login/logout
- Data creation/modification/deletion
- Report generation
- Payment transactions
- User role changes
- System configuration changes
- Failed login attempts
- Suspicious activities
- Backup operations
- API access

### Security Dashboard

#### Failed Login Attempts
- Monitor failed logins
- Lock accounts after threshold
- Send security alerts
- View attack patterns

#### Two-Factor Authentication (2FA)
- Enable/Disable 2FA globally
- Configure 2FA for specific roles
- TOTP (Time-based One-Time Password) support
- Email verification option

#### IP Whitelist/Blacklist
1. Navigate to **Security > IP Management**
2. Add trusted IPs to whitelist
3. Block suspicious IPs
4. Set automatic blocking rules

#### Security Alerts
- Multiple failed login attempts
- Suspicious data access
- Unusual transaction amounts
- System errors and warnings
- Backup failures

---

## Backup & Recovery

### Automated Backup System

#### Configure Backups
1. Navigate to **Settings > Backups > Configuration**
2. Set backup schedule:
   - Daily (2:00 AM recommended)
   - Weekly (Sunday 3:00 AM)
   - Monthly (First day of month)

3. Configure retention:
   - Retention Period: 30 days (default)
   - Number of backups to keep: 10
   - Backup location: Local/AWS S3

4. Enable notifications for backup completion

#### Manual Backup
1. Navigate to **Settings > Backups > Create Backup**
2. Click **Start Backup Now**
3. Monitor progress
4. Backup completion notification sent

#### View Backup History
1. Navigate to **Settings > Backups > History**
2. View all backup records with:
   - Date/Time
   - Size
   - Status
   - Duration
   - Verification status

#### Download Backup
1. Select backup from history
2. Click **Download**
3. Backup file is encrypted
4. Keep safe in secure location

### Recovery Process

#### Point-in-Time Recovery
1. Navigate to **Settings > Backups > Recovery**
2. Select target date/time
3. Review data to be restored
4. Confirm recovery
5. System restores data
6. Verification performed
7. System notifies completion

#### Full System Recovery
1. Stop the application
2. Reset database
3. Download backup
4. Restore from backup
5. Verify integrity
6. Restart system
7. Run health checks

#### Testing Backup Integrity
1. Navigate to **Settings > Backups > Verify**
2. Select backup to test
3. Click **Run Verification**
4. System validates backup integrity
5. View verification report

---

## System Configuration

### Email Settings
1. Navigate to **Settings > Email Configuration**
2. Configure SMTP:
   - SMTP Host
   - SMTP Port
   - Username
   - Password
   - From Email Address
   - From Name
3. Test email send
4. Save settings

### SMS Gateway
1. Navigate to **Settings > SMS Configuration**
2. Select SMS provider (Termii, Twilio, etc.)
3. Enter API credentials
4. Configure sender ID
5. Test SMS send
6. Save settings

### Payment Gateways
1. Navigate to **Settings > Payment Gateways**
2. Configure each gateway:
   - Paystack (API Keys)
   - Flutterwave (API Keys)
   - Moniepoint (API Keys)
3. Set primary gateway
4. Test transactions
5. Enable/Disable as needed

### System Settings
- Application Name
- Logo/Branding
- Theme Color
- Currency (NGN)
- Timezone
- Language
- Session Timeout
- Password Policy
- Data Retention Policy

---

## Advanced Features

### Report Generation

#### Multi-School Reports
1. Navigate to **Reports > Generate Report**
2. Select report type:
   - Academic Performance
   - Financial Summary
   - User Statistics
   - System Usage
   - Compliance Report

3. Select schools to include
4. Choose date range
5. Format: PDF/Excel/CSV
6. Click **Generate**

#### Export Data
- Export student records
- Export financial data
- Export audit logs
- Bulk export option

### System Health Monitor

1. Navigate to **Dashboard > System Health**
2. Monitor:
   - Database performance
   - API response times
   - Server resources
   - Error rates
   - Uptime percentage

### API Management

1. Navigate to **Settings > API Keys**
2. Generate API keys for integrations
3. Set API permissions
4. Monitor API usage
5. Revoke keys if needed

### System Updates

1. Navigate to **Settings > System Updates**
2. Check for updates
3. Review update details
4. Schedule update time
5. Perform automatic backup before update
6. Apply update
7. Run health checks post-update

---

## Best Practices

1. **Security**
   - Change default super admin password immediately
   - Enable 2FA for all admin accounts
   - Regularly audit access logs
   - Use strong passwords
   - Keep API keys secure

2. **Backup**
   - Schedule daily automated backups
   - Test recovery procedures regularly
   - Store backups securely
   - Keep offline copies
   - Document recovery procedures

3. **Maintenance**
   - Monitor system health regularly
   - Update system software promptly
   - Clear old logs periodically
   - Optimize database performance
   - Review user activity logs

4. **Documentation**
   - Document all custom configurations
   - Keep user manuals updated
   - Maintain security procedures
   - Record troubleshooting steps
   - Create quick reference guides

---

## Troubleshooting

### Common Issues

1. **Backup Failed**
   - Check database connectivity
   - Verify disk space
   - Review backup logs
   - Check file permissions

2. **User Cannot Login**
   - Verify user is active
   - Check role permissions
   - Review audit logs
   - Reset password if needed

3. **Payment Gateway Not Working**
   - Verify API credentials
   - Check network connectivity
   - Test with sandbox first
   - Review error logs

4. **Slow System Performance**
   - Check database performance
   - Monitor server resources
   - Clear cache
   - Optimize database queries
   - Review slow query logs

---

## Support

For additional support, please contact:
- Email: support@goodness-sms.com
- Phone: +234-XXX-XXX-XXXX
- Documentation: https://docs.goodness-sms.com

---

**Last Updated:** June 2026
**Version:** 1.0.0
