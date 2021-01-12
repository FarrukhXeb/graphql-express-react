const { Sequelize } = require("sequelize");
const {
  PG_USER,
  PG_PASS,
  PG_HOST,
  PG_DATABASE,
  PG_PORT,
  NODE_ENV,
} = process.env;
const sequelize = new Sequelize(
  `postgres://${PG_USER}:${PG_PASS}@${PG_HOST}:${PG_PORT}/${PG_DATABASE}`,
  { logging: NODE_ENV === "development" }
);
module.exports = sequelize;
