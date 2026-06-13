'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('payroll', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      staffId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'staff', key: 'id' },
        onDelete: 'CASCADE'
      },
      schoolId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'schools', key: 'id' },
        onDelete: 'CASCADE'
      },
      basicSalary: Sequelize.DECIMAL(10, 2),
      allowances: Sequelize.DECIMAL(10, 2),
      deductions: Sequelize.DECIMAL(10, 2),
      netSalary: Sequelize.DECIMAL(10, 2),
      payrollMonth: Sequelize.STRING,
      status: {
        type: Sequelize.STRING,
        defaultValue: 'pending'
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });

    await queryInterface.addIndex('payroll', ['staffId']);
    await queryInterface.addIndex('payroll', ['status']);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('payroll');
  }
};
