'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('operations', [
      {
        userId:1,
        typeId:1,
        concept:'Recibo de sueldo',
        mount:50000,
        date: new Date()
      },
      {
        userId:1,
        typeId:1,
        concept:'Venta de una mesa',
        mount:450,
        date: new Date()
      },
      {
        userId:1,
        typeId:1,
        concept:'Premio de loteria local',
        mount:300,
        date: new Date()
      },
      {
        userId:1,
        typeId:1,
        concept:'Plata encontrada en la calle',
        mount:35,
        date: new Date()
      },
      {
        userId:1,
        typeId:1,
        concept:'Propina del trabajo',
        mount:70,
        date: new Date()
      },
      {
        userId:1,
        typeId:1,
        concept:'Bono por mitad de año',
        mount:15000,
        date: new Date()
      },
      {
        userId:1,
        typeId:1,
        concept:'Premio al desempeño mensual',
        mount:4000,
        date: new Date()
      },
      {
        userId:1,
        typeId:1,
        concept:'Dividendos ',
        mount:700,
        date: new Date()
      },
      {
        userId:1,
        typeId:1,
        concept:'Venta de BTC',
        mount:10000,
        date: new Date()
      },
      {
        userId:1,
        typeId:1,
        concept:'Aguinaldo',
        mount:25000,
        date: new Date()
      },
      {
        userId:1,
        typeId:2,
        concept:'Impuestos',
        mount:6000,
        date: new Date()
      },
      {
        userId:1,
        typeId:2,
        concept:'Alquiler',
        mount:15000,
        date: new Date()
      },
      {
        userId:1,
        typeId:2,
        concept:'Comida',
        mount:10000,
        date: new Date()
      },
      {
        userId:1,
        typeId:2,
        concept:'Nafta',
        mount:1000,
        date: new Date()
      },
      {
        userId:1,
        typeId:2,
        concept:'Reinversión',
        mount:1000,
        date: new Date()
      },
      {
        userId:1,
        typeId:2,
        concept:'Salida con amigos',
        mount:600,
        date: new Date()
      },
      {
        userId:1,
        typeId:2,
        concept:'Rifa solidaria',
        mount:75,
        date: new Date()
      },
      {
        userId:1,
        typeId:2,
        concept:'Repuestos bici',
        mount:700,
        date: new Date()
      },
      {
        userId:1,
        typeId:2,
        concept:'Holding BTC',
        mount:1000,
        date: new Date()
      },
      {
        userId:1,
        typeId:2,
        concept:'Servicios',
        mount:2500,
        date: new Date()
      },
      ///////////////////////////////
      {
        userId:2,
        typeId:1,
        concept:'Recibo de sueldo',
        mount:50000,
        date: new Date()
      },
      {
        userId:2,
        typeId:1,
        concept:'Venta de una mesa',
        mount:450,
        date: new Date()
      },
      {
        userId:2,
        typeId:1,
        concept:'Premio de loteria local',
        mount:300,
        date: new Date()
      },
      {
        userId:2,
        typeId:1,
        concept:'Plata encontrada en la calle',
        mount:35,
        date: new Date()
      },
      {
        userId:2,
        typeId:1,
        concept:'Propina del trabajo',
        mount:70,
        date: new Date()
      },
      {
        userId:2,
        typeId:1,
        concept:'Bono por mitad de año',
        mount:15000,
        date: new Date()
      },
      {
        userId:2,
        typeId:1,
        concept:'Premio al desempeño mensual',
        mount:4000,
        date: new Date()
      },
      {
        userId:2,
        typeId:1,
        concept:'Dividendos ',
        mount:700,
        date: new Date()
      },
      {
        userId:2,
        typeId:1,
        concept:'Venta de BTC',
        mount:10000,
        date: new Date()
      },
      {
        userId:2,
        typeId:1,
        concept:'Aguinaldo',
        mount:25000,
        date: new Date()
      },
      {
        userId:2,
        typeId:2,
        concept:'Impuestos',
        mount:6000,
        date: new Date()
      },
      {
        userId:2,
        typeId:2,
        concept:'Alquiler',
        mount:15000,
        date: new Date()
      },
      {
        userId:2,
        typeId:2,
        concept:'Comida',
        mount:10000,
        date: new Date()
      },
      {
        userId:2,
        typeId:2,
        concept:'Nafta',
        mount:1000,
        date: new Date()
      },
      {
        userId:2,
        typeId:2,
        concept:'Reinversión',
        mount:1000,
        date: new Date()
      },
      {
        userId:2,
        typeId:2,
        concept:'Salida con amigos',
        mount:600,
        date: new Date()
      },
      {
        userId:2,
        typeId:2,
        concept:'Rifa solidaria',
        mount:75,
        date: new Date()
      },
      {
        userId:2,
        typeId:2,
        concept:'Repuestos bici',
        mount:700,
        date: new Date()
      },
      {
        userId:2,
        typeId:2,
        concept:'Holding BTC',
        mount:1000,
        date: new Date()
      },
      {
        userId:2,
        typeId:2,
        concept:'Servicios',
        mount:2500,
        date: new Date()
      },
      //////////////////////////
      {
        userId:3,
        typeId:1,
        concept:'Recibo de sueldo',
        mount:50000,
        date: new Date()
      },
      {
        userId:3,
        typeId:1,
        concept:'Venta de una mesa',
        mount:450,
        date: new Date()
      },
      {
        userId:3,
        typeId:1,
        concept:'Premio de loteria local',
        mount:300,
        date: new Date()
      },
      {
        userId:3,
        typeId:1,
        concept:'Plata encontrada en la calle',
        mount:35,
        date: new Date()
      },
      {
        userId:3,
        typeId:1,
        concept:'Propina del trabajo',
        mount:70,
        date: new Date()
      },
      {
        userId:3,
        typeId:1,
        concept:'Bono por mitad de año',
        mount:15000,
        date: new Date()
      },
      {
        userId:3,
        typeId:1,
        concept:'Premio al desempeño mensual',
        mount:4000,
        date: new Date()
      },
      {
        userId:3,
        typeId:1,
        concept:'Dividendos ',
        mount:700,
        date: new Date()
      },
      {
        userId:3,
        typeId:1,
        concept:'Venta de BTC',
        mount:10000,
        date: new Date()
      },
      {
        userId:3,
        typeId:1,
        concept:'Aguinaldo',
        mount:25000,
        date: new Date()
      },
      {
        userId:3,
        typeId:2,
        concept:'Impuestos',
        mount:6000,
        date: new Date()
      },
      {
        userId:3,
        typeId:2,
        concept:'Alquiler',
        mount:15000,
        date: new Date()
      },
      {
        userId:3,
        typeId:2,
        concept:'Comida',
        mount:10000,
        date: new Date()
      },
      {
        userId:3,
        typeId:2,
        concept:'Nafta',
        mount:1000,
        date: new Date()
      },
      {
        userId:3,
        typeId:2,
        concept:'Reinversión',
        mount:1000,
        date: new Date()
      },
      {
        userId:3,
        typeId:2,
        concept:'Salida con amigos',
        mount:600,
        date: new Date()
      },
      {
        userId:3,
        typeId:2,
        concept:'Rifa solidaria',
        mount:75,
        date: new Date()
      },
      {
        userId:3,
        typeId:2,
        concept:'Repuestos bici',
        mount:700,
        date: new Date()
      },
      {
        userId:3,
        typeId:2,
        concept:'Holding BTC',
        mount:1000,
        date: new Date()
      },
      {
        userId:3,
        typeId:2,
        concept:'Servicios',
        mount:2500,
        date: new Date()
      },
      //////////////////
      {
        userId:4,
        typeId:1,
        concept:'Recibo de sueldo',
        mount:50000,
        date: new Date()
      },
      {
        userId:4,
        typeId:1,
        concept:'Venta de una mesa',
        mount:450,
        date: new Date()
      },
      {
        userId:4,
        typeId:1,
        concept:'Premio de loteria local',
        mount:300,
        date: new Date()
      },
      {
        userId:4,
        typeId:1,
        concept:'Plata encontrada en la calle',
        mount:35,
        date: new Date()
      },
      {
        userId:4,
        typeId:1,
        concept:'Propina del trabajo',
        mount:70,
        date: new Date()
      },
      {
        userId:4,
        typeId:1,
        concept:'Bono por mitad de año',
        mount:15000,
        date: new Date()
      },
      {
        userId:4,
        typeId:1,
        concept:'Premio al desempeño mensual',
        mount:4000,
        date: new Date()
      },
      {
        userId:4,
        typeId:1,
        concept:'Dividendos ',
        mount:700,
        date: new Date()
      },
      {
        userId:4,
        typeId:1,
        concept:'Venta de BTC',
        mount:10000,
        date: new Date()
      },
      {
        userId:4,
        typeId:1,
        concept:'Aguinaldo',
        mount:25000,
        date: new Date()
      },
      {
        userId:4,
        typeId:2,
        concept:'Impuestos',
        mount:6000,
        date: new Date()
      },
      {
        userId:4,
        typeId:2,
        concept:'Alquiler',
        mount:15000,
        date: new Date()
      },
      {
        userId:4,
        typeId:2,
        concept:'Comida',
        mount:10000,
        date: new Date()
      },
      {
        userId:4,
        typeId:2,
        concept:'Nafta',
        mount:1000,
        date: new Date()
      },
      {
        userId:4,
        typeId:2,
        concept:'Reinversión',
        mount:1000,
        date: new Date()
      },
      {
        userId:4,
        typeId:2,
        concept:'Salida con amigos',
        mount:600,
        date: new Date()
      },
      {
        userId:4,
        typeId:2,
        concept:'Rifa solidaria',
        mount:75,
        date: new Date()
      },
      {
        userId:4,
        typeId:2,
        concept:'Repuestos bici',
        mount:700,
        date: new Date()
      },
      {
        userId:4,
        typeId:2,
        concept:'Holding BTC',
        mount:1000,
        date: new Date()
      },
      {
        userId:4,
        typeId:2,
        concept:'Servicios',
        mount:2500,
        date: new Date()
      },
      ////////////////
      {
        userId:5,
        typeId:1,
        concept:'Recibo de sueldo',
        mount:50000,
        date: new Date()
      },
      {
        userId:5,
        typeId:1,
        concept:'Venta de una mesa',
        mount:450,
        date: new Date()
      },
      {
        userId:5,
        typeId:1,
        concept:'Premio de loteria local',
        mount:300,
        date: new Date()
      },
      {
        userId:5,
        typeId:1,
        concept:'Plata encontrada en la calle',
        mount:35,
        date: new Date()
      },
      {
        userId:5,
        typeId:1,
        concept:'Propina del trabajo',
        mount:70,
        date: new Date()
      },
      {
        userId:5,
        typeId:1,
        concept:'Bono por mitad de año',
        mount:15000,
        date: new Date()
      },
      {
        userId:5,
        typeId:1,
        concept:'Premio al desempeño mensual',
        mount:4000,
        date: new Date()
      },
      {
        userId:5,
        typeId:1,
        concept:'Dividendos ',
        mount:700,
        date: new Date()
      },
      {
        userId:5,
        typeId:1,
        concept:'Venta de BTC',
        mount:10000,
        date: new Date()
      },
      {
        userId:5,
        typeId:1,
        concept:'Aguinaldo',
        mount:25000,
        date: new Date()
      },
      {
        userId:5,
        typeId:2,
        concept:'Impuestos',
        mount:6000,
        date: new Date()
      },
      {
        userId:5,
        typeId:2,
        concept:'Alquiler',
        mount:15000,
        date: new Date()
      },
      {
        userId:5,
        typeId:2,
        concept:'Comida',
        mount:10000,
        date: new Date()
      },
      {
        userId:5,
        typeId:2,
        concept:'Nafta',
        mount:1000,
        date: new Date()
      },
      {
        userId:5,
        typeId:2,
        concept:'Reinversión',
        mount:1000,
        date: new Date()
      },
      {
        userId:5,
        typeId:2,
        concept:'Salida con amigos',
        mount:600,
        date: new Date()
      },
      {
        userId:5,
        typeId:2,
        concept:'Rifa solidaria',
        mount:75,
        date: new Date()
      },
      {
        userId:5,
        typeId:2,
        concept:'Repuestos bici',
        mount:700,
        date: new Date()
      },
      {
        userId:5,
        typeId:2,
        concept:'Holding BTC',
        mount:1000,
        date: new Date()
      },
      {
        userId:5,
        typeId:2,
        concept:'Servicios',
        mount:2500,
        date: new Date()
      },
      /////////////////////////////
      {
        userId:6,
        typeId:1,
        concept:'Recibo de sueldo',
        mount:50000,
        date: new Date()
      },
      {
        userId:6,
        typeId:1,
        concept:'Venta de una mesa',
        mount:450,
        date: new Date()
      },
      {
        userId:6,
        typeId:1,
        concept:'Premio de loteria local',
        mount:300,
        date: new Date()
      },
      {
        userId:6,
        typeId:1,
        concept:'Plata encontrada en la calle',
        mount:35,
        date: new Date()
      },
      {
        userId:6,
        typeId:1,
        concept:'Propina del trabajo',
        mount:70,
        date: new Date()
      },
      {
        userId:6,
        typeId:1,
        concept:'Bono por mitad de año',
        mount:15000,
        date: new Date()
      },
      {
        userId:6,
        typeId:1,
        concept:'Premio al desempeño mensual',
        mount:4000,
        date: new Date()
      },
      {
        userId:6,
        typeId:1,
        concept:'Dividendos ',
        mount:700,
        date: new Date()
      },
      {
        userId:6,
        typeId:1,
        concept:'Venta de BTC',
        mount:10000,
        date: new Date()
      },
      {
        userId:6,
        typeId:1,
        concept:'Aguinaldo',
        mount:25000,
        date: new Date()
      },
      {
        userId:6,
        typeId:2,
        concept:'Impuestos',
        mount:6000,
        date: new Date()
      },
      {
        userId:6,
        typeId:2,
        concept:'Alquiler',
        mount:15000,
        date: new Date()
      },
      {
        userId:6,
        typeId:2,
        concept:'Comida',
        mount:10000,
        date: new Date()
      },
      {
        userId:6,
        typeId:2,
        concept:'Nafta',
        mount:1000,
        date: new Date()
      },
      {
        userId:6,
        typeId:2,
        concept:'Reinversión',
        mount:1000,
        date: new Date()
      },
      {
        userId:6,
        typeId:2,
        concept:'Salida con amigos',
        mount:600,
        date: new Date()
      },
      {
        userId:6,
        typeId:2,
        concept:'Rifa solidaria',
        mount:75,
        date: new Date()
      },
      {
        userId:6,
        typeId:2,
        concept:'Repuestos bici',
        mount:700,
        date: new Date()
      },
      {
        userId:6,
        typeId:2,
        concept:'Holding BTC',
        mount:1000,
        date: new Date()
      },
      {
        userId:6,
        typeId:2,
        concept:'Servicios',
        mount:2500,
        date: new Date()
      },
      
    ]);
  },

  down: async (queryInterface, Sequelize) => {
  }
};
