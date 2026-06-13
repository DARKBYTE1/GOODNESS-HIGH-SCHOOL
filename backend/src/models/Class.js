const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Class = sequelize.define('Class', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  className: DataTypes.STRING,
  classArm: DataTypes.STRING,
  schoolId: DataTypes.UUID,
  classTeacherId: DataTypes.UUID,
  capacity: DataTypes.INTEGER,
  currentEnrollment: DataTypes.INTEGER,
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'classes',
  timestamps: true
});

module.exports = Class;
