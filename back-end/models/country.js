const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const Country = sequelize.define("country", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  abbreviation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = Country;
