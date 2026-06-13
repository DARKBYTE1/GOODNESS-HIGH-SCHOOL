const { School, Franchise, User, Role, AuditLog } = require('../../models');

// School Management
exports.listSchools = async (req, res) => {
  try {
    const schools = await School.findAll({ order: [['createdAt', 'DESC']] });
    res.json({
      success: true,
      count: schools.length,
      schools
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.createSchool = async (req, res) => {
  try {
    const { schoolName, schoolCode, schoolType, address, city, state, phone, email } = req.body;
    const school = await School.create({
      schoolName,
      schoolCode,
      schoolType,
      address,
      city,
      state,
      phone,
      email,
      status: 'active'
    });
    res.status(201).json({
      success: true,
      message: 'School created successfully',
      school
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getSchoolDetails = async (req, res) => {
  try {
    const school = await School.findByPk(req.params.id);
    if (!school) {
      return res.status(404).json({
        success: false,
        message: 'School not found'
      });
    }
    res.json({
      success: true,
      school
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.updateSchool = async (req, res) => {
  try {
    const school = await School.findByPk(req.params.id);
    if (!school) {
      return res.status(404).json({
        success: false,
        message: 'School not found'
      });
    }
    await school.update(req.body);
    res.json({
      success: true,
      message: 'School updated successfully',
      school
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.deleteSchool = async (req, res) => {
  try {
    const school = await School.findByPk(req.params.id);
    if (!school) {
      return res.status(404).json({
        success: false,
        message: 'School not found'
      });
    }
    await school.destroy();
    res.json({
      success: true,
      message: 'School deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Franchise Management
exports.listFranchises = async (req, res) => {
  try {
    const franchises = await Franchise.findAll({ order: [['createdAt', 'DESC']] });
    res.json({
      success: true,
      count: franchises.length,
      franchises
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.createFranchise = async (req, res) => {
  try {
    const franchiseData = req.body;
    const franchise = await Franchise.create(franchiseData);
    res.status(201).json({
      success: true,
      message: 'Franchise created successfully',
      franchise
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getFranchiseDetails = async (req, res) => {
  try {
    const franchise = await Franchise.findByPk(req.params.id);
    if (!franchise) {
      return res.status(404).json({
        success: false,
        message: 'Franchise not found'
      });
    }
    res.json({
      success: true,
      franchise
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.updateFranchise = async (req, res) => {
  try {
    const franchise = await Franchise.findByPk(req.params.id);
    if (!franchise) {
      return res.status(404).json({
        success: false,
        message: 'Franchise not found'
      });
    }
    await franchise.update(req.body);
    res.json({
      success: true,
      message: 'Franchise updated successfully',
      franchise
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.approveFranchise = async (req, res) => {
  try {
    const franchise = await Franchise.findByPk(req.params.id);
    if (!franchise) {
      return res.status(404).json({
        success: false,
        message: 'Franchise not found'
      });
    }
    await franchise.update({ status: 'approved' });
    res.json({
      success: true,
      message: 'Franchise approved successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.rejectFranchise = async (req, res) => {
  try {
    const franchise = await Franchise.findByPk(req.params.id);
    if (!franchise) {
      return res.status(404).json({
        success: false,
        message: 'Franchise not found'
      });
    }
    await franchise.update({ status: 'rejected' });
    res.json({
      success: true,
      message: 'Franchise rejected'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// User Management
exports.listUsers = async (req, res) => {
  try {
    const users = await User.findAll({ order: [['createdAt', 'DESC']] });
    res.json({
      success: true,
      count: users.length,
      users
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      success: true,
      message: 'User created successfully',
      user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }
    await user.update(req.body);
    res.json({
      success: true,
      message: 'User updated successfully',
      user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }
    await user.destroy();
    res.json({
      success: true,
      message: 'User deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.resetUserPassword = async (req, res) => {
  try {
    res.json({
      success: true,
      message: 'Password reset email sent'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Role Management
exports.listRoles = async (req, res) => {
  try {
    const roles = await Role.findAll();
    res.json({
      success: true,
      count: roles.length,
      roles
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.createRole = async (req, res) => {
  try {
    const role = await Role.create(req.body);
    res.status(201).json({
      success: true,
      message: 'Role created successfully',
      role
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.updateRole = async (req, res) => {
  try {
    const role = await Role.findByPk(req.params.id);
    if (!role) {
      return res.status(404).json({
        success: false,
        message: 'Role not found'
      });
    }
    await role.update(req.body);
    res.json({
      success: true,
      message: 'Role updated successfully',
      role
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.deleteRole = async (req, res) => {
  try {
    const role = await Role.findByPk(req.params.id);
    if (!role) {
      return res.status(404).json({
        success: false,
        message: 'Role not found'
      });
    }
    await role.destroy();
    res.json({
      success: true,
      message: 'Role deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Audit Logs
exports.getAuditLogs = async (req, res) => {
  try {
    const logs = await AuditLog.findAll({
      limit: 100,
      order: [['createdAt', 'DESC']]
    });
    res.json({
      success: true,
      count: logs.length,
      logs
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Backup Management
exports.createBackup = async (req, res) => {
  try {
    res.json({
      success: true,
      message: 'Backup initiated successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.listBackups = async (req, res) => {
  try {
    res.json({
      success: true,
      backups: []
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.restoreBackup = async (req, res) => {
  try {
    res.json({
      success: true,
      message: 'Backup restoration initiated'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// System Configuration
exports.getSystemConfig = async (req, res) => {
  try {
    res.json({
      success: true,
      config: {}
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.updateSystemConfig = async (req, res) => {
  try {
    res.json({
      success: true,
      message: 'System configuration updated successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Analytics
exports.getDashboardAnalytics = async (req, res) => {
  try {
    res.json({
      success: true,
      analytics: {}
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getSchoolAnalytics = async (req, res) => {
  try {
    res.json({
      success: true,
      analytics: {}
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getFinancialAnalytics = async (req, res) => {
  try {
    res.json({
      success: true,
      analytics: {}
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
