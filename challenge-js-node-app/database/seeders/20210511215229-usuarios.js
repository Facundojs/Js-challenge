'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
    {
      first_name: 'John',
      last_name: 'Doe',
      email: 'johndoe@gmail.com',
      password:'Johnismyname'
      // createdAt: new Date()
    },
    {
      first_name: 'David',
      last_name: 'Polik',
      email: 'davidpolik@gmail.com',
      password:'Davidismyname'
      // createdAt: new Date()
    },
    {
      first_name: 'Arnold',
      last_name: 'Press',
      email: 'arnoldpress@gmail.com',
      password:'Arnoldismyname'
      // createdAt: new Date()
    },
    {
      first_name: 'Patrick',
      last_name: 'Tupou',
      email: 'patricktupou@gmail.com',
      password:'Patrikismyname'
      // createdAt: new Date()
    },
    {
      first_name: 'Matt',
      last_name: 'Tris',
      email: 'matttris@gmail.com',
      password:'Mattismyname'
      // createdAt: new Date()
    },
    {
      first_name: 'James',
      last_name: 'Bond',
      email: 'jamesbond@gmail.com',
      password:'Jamesismyname'
      // createdAt: new Date()
    }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
  }
};
