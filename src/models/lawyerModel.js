const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelizer");

const lawyer = sequelize.define(
  "lawyers",
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
  },
  {
    timestamps: false,
  }
);



//lawyer.sync({ force: true }); // DANGEROUS!!! must remove at production
module.exports = lawyer;
