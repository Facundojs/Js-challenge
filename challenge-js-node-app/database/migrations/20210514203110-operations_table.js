'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('operations', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'users'
          },
          key: 'id'
        }
      },
      typeId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'operation_types'
          },
          key:'id'
        }
      },
      concept: Sequelize.STRING,
      mount: Sequelize.INTEGER,
      date: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('operations');
  }
};
