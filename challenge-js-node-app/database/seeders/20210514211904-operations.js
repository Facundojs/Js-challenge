'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('operations', [
      {
        userId:1,
        typeId:1,
        concept:'Recibo de sueldo',
        mount:450,
        date: new Date()
      },
      {
        userId:1,
        typeId:2,
        concept:'Pago de cuentas',
        mount:300,
        date: new Date()
      },
      {
        userId:2,
        typeId:1,
        concept:'Recibo de sueldo',
        mount:450,
        date: new Date()
      },
      {
        userId:2,
        typeId:2,
        concept:'Pago de cuentas',
        mount:300,
        date: new Date()
      },
      {
        userId:3,
        typeId:1,
        concept:'Recibo de sueldo',
        mount:450,
        date: new Date()
      },
      {
        userId:3,
        typeId:2,
        concept:'Pago de cuentas',
        mount:300,
        date: new Date()
      },
      {
        userId:4,
        typeId:1,
        concept:'Recibo de sueldo',
        mount:450,
        date: new Date()
      },
      {
        userId:4,
        typeId:2,
        concept:'Pago de cuentas',
        mount:300,
        date: new Date()
      },
      {
        userId:5,
        typeId:1,
        concept:'Recibo de sueldo',
        mount:450,
        date: new Date()
      },
      {
        userId:5,
        typeId:2,
        concept:'Pago de cuentas',
        mount:300,
        date: new Date()
      },
      {
        userId:6,
        typeId:1,
        concept:'Recibo de sueldo',
        mount:450,
        date: new Date()
      },
      {
        userId:6,
        typeId:2,
        concept:'Pago de cuentas',
        mount:300,
        date: new Date()
      },
      
    ]);
  },

  down: async (queryInterface, Sequelize) => {
  }
};
