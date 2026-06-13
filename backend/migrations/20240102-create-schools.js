'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('schools', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      schoolName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      schoolCode: {
        type: Sequelize.STRING,
        unique: true
      },
      schoolType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address: Sequelize.STRING,
      city: Sequelize.STRING,
      state: Sequelize.STRING,
      phone: Sequelize.STRING,
      email: Sequelize.STRING,
      website: Sequelize.STRING,
      logoUrl: Sequelize.STRING,
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

    await queryInterface.addIndex('schools', ['status']);
    await queryInterface.addIndex('schools', ['schoolCode']);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('schools');
  }
};
