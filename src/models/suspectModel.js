const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelizer");

const suspect = sequelize.define(
  "suspects",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.INTEGER,
    },
    police_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);


//suspect.sync({force:true}) // DANGEROUS!!! must remove at production
module.exports = suspect;
