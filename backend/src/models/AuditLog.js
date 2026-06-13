const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const AuditLog = sequelize.define('AuditLog', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  userId: DataTypes.UUID,
  schoolId: DataTypes.UUID,
  action: DataTypes.STRING,
  method: DataTypes.STRING,
  path: DataTypes.STRING,
  ip: DataTypes.STRING,
  userAgent: DataTypes.STRING,
  requestBody: DataTypes.JSONB,
  responseStatus: DataTypes.INTEGER,
  timestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'audit_logs',
  timestamps: false
});

module.exports = AuditLog;
