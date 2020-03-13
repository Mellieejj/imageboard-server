const Sequelize = require("sequelize");
const db = require("../db");
const Image = require("../image/model");
const User = db.define(
  "user",
  {
    name: {
      type: Sequelize.STRING,
      allownull: false
    },
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
    timestamps: false,
    tableName: "users"
  }
);

Image.belongsTo(User);

User.hasMany(Image);

module.exports = User;
