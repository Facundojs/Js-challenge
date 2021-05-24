'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      first_name: Sequelize.STRING,
      last_name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      // createdAt: Sequelize.DATE,
      // updatedAt: Sequelize.DATE,
      // deletedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
