const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class DataOne extends Model {}

DataOne.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    versionId: {
      type: DataTypes.STRING,
    },

    eventDate: { type: DataTypes.DATEONLY },
    lastUpdated: { type: DataTypes.DATE },
    info: DataTypes.TEXT,
    url: DataTypes.STRING,

    // Add any new columns to the DataOne model here
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'data one',
  }
);

module.exports = DataOne;
