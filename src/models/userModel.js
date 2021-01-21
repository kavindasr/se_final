const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelizer");

const user = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement:true,
      primaryKey: true,
    },
    nic: {
      type: DataTypes.STRING,
      allowNull: false,  
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobile: {
      type: DataTypes.STRING,
    },
    created_on: {
      type: DataTypes.DATE,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

//user.sync({force:true}) // DANGEROUS!!! must remove at production
module.exports = user;
