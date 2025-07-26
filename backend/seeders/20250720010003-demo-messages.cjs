"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Messages",
      [
        {
          text: "Hello World",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "Test message",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "Another message",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Messages", null, {});
  },
};
