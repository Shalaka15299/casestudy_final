'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [{
      userid: 35,
      userName:'Shalaka',
      // userAddress:'Panvel',
      paymentMode:'COD',
      grandTotal:500,
      orderStatus:'order placed',
      createdAt:new Date(),
      updatedAt:new Date(),
     }], {});
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
