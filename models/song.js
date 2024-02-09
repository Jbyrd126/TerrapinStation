// Song.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Song extends Model {}

Song.init({
  name: DataTypes.STRING,
  info: DataTypes.TEXT
}, { 

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'song',
  
});

module.exports = Song;