'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('exams', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      examName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      examType: Sequelize.STRING,
      schoolId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'schools', key: 'id' },
        onDelete: 'CASCADE'
      },
      classId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'classes', key: 'id' },
        onDelete: 'CASCADE'
      },
      subjectId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'subjects', key: 'id' },
        onDelete: 'CASCADE'
      },
      totalScore: Sequelize.INTEGER,
      startDate: Sequelize.DATE,
      endDate: Sequelize.DATE,
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });

    await queryInterface.addIndex('exams', ['schoolId']);
    await queryInterface.addIndex('exams', ['classId']);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('exams');
  }
};
