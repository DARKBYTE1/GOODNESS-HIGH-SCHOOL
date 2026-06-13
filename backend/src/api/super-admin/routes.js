const express = require('express');
const router = express.Router();
const superAdminController = require('./controller');
const { authenticate } = require('../../middleware/auth');
const { authorize, ROLES } = require('../../middleware/rbac');

// All Super Admin routes require authentication and super admin role
router.use(authenticate);
router.use(authorize([ROLES.SUPER_ADMIN]));

// School Management
router.get('/schools', superAdminController.listSchools);
router.post('/schools', superAdminController.createSchool);
router.get('/schools/:id', superAdminController.getSchoolDetails);
router.put('/schools/:id', superAdminController.updateSchool);
router.delete('/schools/:id', superAdminController.deleteSchool);

// Franchise Management
router.get('/franchises', superAdminController.listFranchises);
router.post('/franchises', superAdminController.createFranchise);
router.get('/franchises/:id', superAdminController.getFranchiseDetails);
router.put('/franchises/:id', superAdminController.updateFranchise);
router.post('/franchises/:id/approve', superAdminController.approveFranchise);
router.post('/franchises/:id/reject', superAdminController.rejectFranchise);

// User Management
router.get('/users', superAdminController.listUsers);
router.post('/users', superAdminController.createUser);
router.put('/users/:id', superAdminController.updateUser);
router.delete('/users/:id', superAdminController.deleteUser);
router.post('/users/:id/reset-password', superAdminController.resetUserPassword);

// Role Management
router.get('/roles', superAdminController.listRoles);
router.post('/roles', superAdminController.createRole);
router.put('/roles/:id', superAdminController.updateRole);
router.delete('/roles/:id', superAdminController.deleteRole);

// Audit Logs
router.get('/audit-logs', superAdminController.getAuditLogs);

// Backup Management
router.post('/backups/create', superAdminController.createBackup);
router.get('/backups/list', superAdminController.listBackups);
router.post('/backups/restore', superAdminController.restoreBackup);

// System Configuration
router.get('/config', superAdminController.getSystemConfig);
router.put('/config', superAdminController.updateSystemConfig);

// Analytics
router.get('/analytics/dashboard', superAdminController.getDashboardAnalytics);
router.get('/analytics/schools', superAdminController.getSchoolAnalytics);
router.get('/analytics/financial', superAdminController.getFinancialAnalytics);

module.exports = router;
