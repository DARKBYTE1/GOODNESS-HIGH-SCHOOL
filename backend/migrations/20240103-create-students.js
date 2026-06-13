'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('students', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      admissionNumber: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      middleName: Sequelize.STRING,
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dateOfBirth: Sequelize.DATE,
      gender: Sequelize.STRING,
      nationality: Sequelize.STRING,
      stateOfOrigin: Sequelize.STRING,
      passportPhotoUrl: Sequelize.STRING,
      birthCertificateUrl: Sequelize.STRING,
      schoolId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'schools', key: 'id' },
        onDelete: 'CASCADE'
      },
      classId: {
        type: Sequelize.UUID,
        references: { model: 'classes', key: 'id' },
        onDelete: 'SET NULL'
      },
      parentId: Sequelize.UUID,
      status: {
        type: Sequelize.STRING,
        defaultValue: 'active'
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });

    await queryInterface.addIndex('students', ['schoolId']);
    await queryInterface.addIndex('students', ['classId']);
    await queryInterface.addIndex('students', ['admissionNumber']);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('students');
  }
};
