"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Users", "countryId", {
      type: Sequelize.UUID,
      references: {
        model: "Country", // name of Target model
        key: "id", // key in Target model that we're referencing
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      "Users", // name of the Target model
      "countryId" // key we want to remove
    );
    await queryInterface.dropTable("CategoryProducts");
  },
};
