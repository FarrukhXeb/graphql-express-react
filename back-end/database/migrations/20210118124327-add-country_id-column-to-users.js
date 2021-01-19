"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Users", "country_id", {
      type: Sequelize.INTEGER,
      references: {
        model: "Countries", // name of Target model
        key: "id", // key in Target model that we're referencing
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      "Users", // name of the Target model
      "country_id" // key we want to remove
    );
  },
};
