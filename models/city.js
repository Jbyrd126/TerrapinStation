// City.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class City extends Model {}

City.init({
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  name: DataTypes.STRING,
  state: DataTypes.STRING,
  stateCode: DataTypes.STRING
}, { 

  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'city',

});

module.exports = City;