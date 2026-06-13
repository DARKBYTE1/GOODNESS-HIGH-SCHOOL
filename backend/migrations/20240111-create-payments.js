'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('payments', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      feeId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'fees', key: 'id' },
        onDelete: 'CASCADE'
      },
      studentId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'students', key: 'id' },
        onDelete: 'CASCADE'
      },
      amount: Sequelize.DECIMAL(10, 2),
      paymentMethod: Sequelize.STRING,
      transactionReference: Sequelize.STRING,
      status: {
        type: Sequelize.STRING,
        defaultValue: 'pending'
      },
      paymentDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });

    await queryInterface.addIndex('payments', ['studentId']);
    await queryInterface.addIndex('payments', ['status']);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('payments');
  }
};
