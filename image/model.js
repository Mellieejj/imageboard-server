const Sequelize = require("sequelize");
const db = require("../db");
// const User = require("../user/model");

const Image = db.define("image", {
  url: Sequelize.STRING,
  title: Sequelize.STRING
});

module.exports = Image;
