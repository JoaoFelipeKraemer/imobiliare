'use strict';
const { hashSync } = require('bcryptjs');
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('clients',
    [
      {
        email: 'anabc@hotmail.com',
        role: 'vendedor',
        password_hash: hashSync('carambolas'),
        name: 'Ana Banana'
      },
      {
        email: 'pauloX@hotmail.com',
        role: 'comprador',
        password_hash: hashSync('patatipatata'),
        name: 'Paulo Patata'
      },
      {
        email: 'carlosArana@hotmail.com',
        role: 'locatario',
        password_hash: hashSync('carlinhos123'),
        name: 'Carlos Arana'
      },
      {
        email: 'pedrinho121@hotmail.com',
        role: 'locador',
        password_hash: hashSync('123456abc'),
        name: 'Pedro Vargas'
      }
    ],
  );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clients', null, {});
  }
};
