"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "Messages",
            [
                {
                    text: "Hello World",
                    id: "1",
                },
                {
                    text: "Test message",
                    id: "2",
                },
                {
                    text: "Another message",
                    id: "3",
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Messages", null, {});
    },
};
