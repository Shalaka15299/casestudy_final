'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('logins', [{

      username: 'Admin',
      password: 'Admin@123',
      createdAt: new Date(),
      updatedAt: new Date()
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
