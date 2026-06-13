const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Exam = sequelize.define('Exam', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  examName: DataTypes.STRING,
  examType: DataTypes.STRING,
  schoolId: DataTypes.UUID,
  classId: DataTypes.UUID,
  subjectId: DataTypes.UUID,
  totalScore: DataTypes.INTEGER,
  startDate: DataTypes.DATE,
  endDate: DataTypes.DATE,
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'exams',
  timestamps: false
});

module.exports = Exam;
