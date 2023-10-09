'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('owners', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true, // Specify 'id' as the primary key
        autoIncrement: true, // Enable auto-increment
      },
      clientIdClient: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'client_id_client',
        references: {
          model: 'clients',
          key: 'id_client',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      propertyIdProperty: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'property_id_property',
        references: {
          model: 'properties',
          key: 'id_property'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      }

    })
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('owners')
  }
};
