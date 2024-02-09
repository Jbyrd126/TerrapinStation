// Country.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Country extends Model {}

Country.init({
  code: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  name: DataTypes.STRING
}, { 

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'country',

});

module.exports = Country;