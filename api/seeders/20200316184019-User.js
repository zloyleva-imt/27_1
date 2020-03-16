'use strict';

const faker = require('faker');

const users = [...new Array(100)].map(() => {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: '123456789',
    age: 29,
    role: 'user',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
})

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', users, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
