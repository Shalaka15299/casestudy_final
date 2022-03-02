'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Users', 
     [
       {
      userName: 'Shalaka',
      userEmail:'shalaka@gmail.com',
      Phone:9870556600,
      password:'12345',
      createdAt:new Date(),
      updatedAt:new Date()
       //isBetaMember: false
     },
     {
      userName: 'Roshan',
      userEmail:'roshan@gmail.com',
      Phone:9070556600,
      password:'12345',
      createdAt:new Date(),
      updatedAt:new Date()

       //isBetaMember: false
     },
     {
      userName: 'Aditya',
      userEmail:'aditya@gmail.com',
      Phone:8870556600,
      password:'12345',
      createdAt:new Date(),
      updatedAt:new Date()

       //isBetaMember: false
     }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
