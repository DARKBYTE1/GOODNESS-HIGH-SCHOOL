const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Franchise = sequelize.define('Franchise', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  franchiseName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  franchiseCode: {
    type: DataTypes.STRING,
    unique: true
  },
  ownerName: DataTypes.STRING,
  ownerEmail: DataTypes.STRING,
  ownerPhone: DataTypes.STRING,
  address: DataTypes.STRING,
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pending'
  },
  franchiseFee: DataTypes.DECIMAL,
  packageType: DataTypes.STRING,
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'franchises',
  timestamps: true
});

module.exports = Franchise;
