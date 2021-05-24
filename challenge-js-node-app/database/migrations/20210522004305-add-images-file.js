'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'avatar', {
      type: Sequelize.DataTypes.STRING
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users', 'avatar');
  }
};
