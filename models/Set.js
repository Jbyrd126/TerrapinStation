const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Set extends Model {}

Set.init(
  {
    venueName: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    tourName: {
      type: DataTypes.STRING,
    },
    // Define a text field to store the array as a JSON string
  setOneSongs: {
    type: DataTypes.TEXT,
    allowNull: true,
    get() {
      const value = this.getDataValue('setOneSongs');
      return value ? JSON.parse(value) : null;
    },
    set(value) {
      this.setDataValue('setOneSongs', JSON.stringify(value));
    }
  },
     // Define a text field to store the array as a JSON string
  setTwoSongs: {
    type: DataTypes.TEXT,
    allowNull: true,
    get() {
      const value = this.getDataValue('setTwoSongs');
      return value ? JSON.parse(value) : null;
    },
    set(value) {
      this.setDataValue('setTwoSongs', JSON.stringify(value));
    }
  },
    encoreSongName: {
      type: DataTypes.STRING,
    },
    encoreSongNameTwo: {
      type: DataTypes.STRING,
    },
    
    eventDate: { type: DataTypes.DATE },
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
    modelName: 'Set',
  }
);

module.exports = Set;
