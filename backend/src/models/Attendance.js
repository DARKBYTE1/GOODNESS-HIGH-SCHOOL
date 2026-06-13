const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Attendance = sequelize.define('Attendance', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  studentId: DataTypes.UUID,
  classId: DataTypes.UUID,
  date: DataTypes.DATE,
  status: DataTypes.STRING,
  remark: DataTypes.STRING,
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'attendance',
  timestamps: false
});

module.exports = Attendance;
