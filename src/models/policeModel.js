const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelizer");

const police = sequelize.define(
  "polices",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    designation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    station_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);



//police.sync({force:true}) // DANGEROUS!!! must remove at production
module.exports = police;
