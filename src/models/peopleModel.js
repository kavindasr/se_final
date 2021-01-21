const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelizer");

const people = sequelize.define(
  "peoples",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    address: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: false,
  }
);




//people.sync({force:true}) // DANGEROUS!!! must remove at production
module.exports = people;
