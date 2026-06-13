const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Payroll = sequelize.define('Payroll', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  staffId: DataTypes.UUID,
  schoolId: DataTypes.UUID,
  basicSalary: DataTypes.DECIMAL,
  allowances: DataTypes.DECIMAL,
  deductions: DataTypes.DECIMAL,
  netSalary: DataTypes.DECIMAL,
  payrollMonth: DataTypes.STRING,
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pending'
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'payroll',
  timestamps: false
});

module.exports = Payroll;
