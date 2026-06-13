'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('staff', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      staffNumber: {
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
      email: Sequelize.STRING,
      phone: Sequelize.STRING,
      designation: Sequelize.STRING,
      schoolId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'schools', key: 'id' },
        onDelete: 'CASCADE'
      },
      department: Sequelize.STRING,
      dateOfEmployment: Sequelize.DATE,
      dateOfBirth: Sequelize.DATE,
      qualification: Sequelize.STRING,
      status: {
        type: Sequelize.STRING,
        defaultValue: 'active'
      },
      basicSalary: Sequelize.DECIMAL(10, 2),
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });

    await queryInterface.addIndex('staff', ['schoolId']);
    await queryInterface.addIndex('staff', ['designation']);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('staff');
  }
};
