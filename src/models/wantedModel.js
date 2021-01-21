const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelizer");

const wanted = sequelize.define(
  "wanteds",
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


//wanted.sync({force:true}) // DANGEROUS!!! must remove at production
module.exports = wanted;
