'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('audit_logs', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      userId: {
        type: Sequelize.UUID,
        references: { model: 'users', key: 'id' },
        onDelete: 'SET NULL'
      },
      schoolId: {
        type: Sequelize.UUID,
        references: { model: 'schools', key: 'id' },
        onDelete: 'SET NULL'
      },
      action: Sequelize.STRING,
      method: Sequelize.STRING,
      path: Sequelize.STRING,
      ip: Sequelize.STRING,
      userAgent: Sequelize.TEXT,
      requestBody: Sequelize.JSONB,
      responseStatus: Sequelize.INTEGER,
      timestamp: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });

    await queryInterface.addIndex('audit_logs', ['userId']);
    await queryInterface.addIndex('audit_logs', ['schoolId']);
    await queryInterface.addIndex('audit_logs', ['timestamp']);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('audit_logs');
  }
};
