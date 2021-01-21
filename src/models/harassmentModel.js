const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelizer");

const harassment = sequelize.define(
  "harassments",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_on: {
      type: DataTypes.DATE,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    people_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);


//harassment.sync({force:true}) // DANGEROUS!!! must remove at production
module.exports = harassment;
