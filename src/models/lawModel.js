const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelizer");

const law = sequelize.define(
  "laws",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    law_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    law_notes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lawyer_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);


//law.sync({ force: true }); // DANGEROUS!!! must remove at production
module.exports = law;
