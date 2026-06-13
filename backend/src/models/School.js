const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const School = sequelize.define('School', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  schoolName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  schoolCode: {
    type: DataTypes.STRING,
    unique: true
  },
  schoolType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: DataTypes.STRING,
  city: DataTypes.STRING,
  state: DataTypes.STRING,
  phone: DataTypes.STRING,
  email: DataTypes.STRING,
  website: DataTypes.STRING,
  status: {
    type: DataTypes.STRING,
    defaultValue: 'active'
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'schools',
  timestamps: true
});

module.exports = School;
