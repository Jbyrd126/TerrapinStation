// import all models here
const User = require('./User');
const Date = require('./Date');
const DataOne = require('./Set');

User.hasMany(Date, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Date.belongsTo(User, {
  foreignKey: 'user_id'
});

// create any associations here

// export all models here
module.exports = 
   { Date, User, DataOne}
;
