// Date.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Date extends Model {}

Date.init({
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  eventDate: DataTypes.DATE,
  lastUpdated: DataTypes.DATE
}, { 

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'date',

});

module.exports = Date;