'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('owners', 
    [
      {
        client_id_client: 1,
        property_id_property: 2
      },
      {
        client_id_client: 4,
        property_id_property: 1
      }
    ]
    )
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.bulkDelete('owners', null, {});

  }
};
