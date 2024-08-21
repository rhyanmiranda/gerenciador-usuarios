'use strict';
const bcrypt = require('bcrypt')
const saltRounds = 8

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: await bcrypt.hash('password123', saltRounds),
        date_of_birth: '1990-01-01',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        password: await bcrypt.hash('mypassword', saltRounds),
        date_of_birth: '1985-05-15',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        password: await bcrypt.hash('alicepass', saltRounds),
        date_of_birth: '1992-09-25',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bob Brown',
        email: 'bob.brown@example.com',
        password: await bcrypt.hash('bobsecure', saltRounds),
        date_of_birth: '1988-03-12',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
};
