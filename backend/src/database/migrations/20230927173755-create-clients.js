'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.createTable('clients', {
      
      idClient: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'id_client' 
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false
      },
      passwordHash: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'password_hash'
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      }

     });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('clients');
  } 
};
