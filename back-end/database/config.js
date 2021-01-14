const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const { PG_USER, PG_HOST, PG_PASS, PG_PORT, PG_DATABASE } = process.env;
module.exports = {
  development: {
    username: PG_USER,
    password: PG_PASS,
    database: PG_DATABASE,
    host: PG_HOST,
    dialect: "postgres",
    port: PG_PORT,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "postgres",
  },
};
