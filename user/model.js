const Sequelize = require("sequelize");
const db = require("../db");

const User = db.define(
  "user",
  {
    email: {
      type: Sequelize.STRING,
      allownull: false
    },
    password: {
      type: Sequelize.STRING,
      allownull: false
    }
  },
  {
    timestaps: false,
    tableName: "users"
  }
);

module.exports = User;
