'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('fees', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      studentId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'students', key: 'id' },
        onDelete: 'CASCADE'
      },
      schoolId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'schools', key: 'id' },
        onDelete: 'CASCADE'
      },
      term: Sequelize.STRING,
      feeType: Sequelize.STRING,
      amount: Sequelize.DECIMAL(10, 2),
      status: {
        type: Sequelize.STRING,
        defaultValue: 'pending'
      },
      dueDate: Sequelize.DATE,
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });

    await queryInterface.addIndex('fees', ['studentId']);
    await queryInterface.addIndex('fees', ['status']);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('fees');
  }
};
