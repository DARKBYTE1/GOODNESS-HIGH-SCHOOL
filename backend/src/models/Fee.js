const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Fee = sequelize.define('Fee', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  studentId: DataTypes.UUID,
  schoolId: DataTypes.UUID,
  term: DataTypes.STRING,
  feeType: DataTypes.STRING,
  amount: DataTypes.DECIMAL,
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pending'
  },
  dueDate: DataTypes.DATE,
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'fees',
  timestamps: false
});

module.exports = Fee;
