'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('properties',
    [
      {
        address: 'Rua Gonçalo, 79, Olinda',
        complement: 'ap 203',
        city: 'Pelotas',
        state: 'RS',
        price: 300000,
        availability: 'venda'
      },
      {
        address: 'Rua Getúlio Vargas, 421, Facas',
        complement: null,
        city: 'Pelotas',
        state: 'RS',
        price: 1000,
        availability: 'alugar'
      },
      
    ],
  );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('properties', null, {});
  }
};
