const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelizer");

const station = sequelize.define(
  "stations",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);



//station.sync({force:true}) // DANGEROUS!!! must remove at production
module.exports = station;
