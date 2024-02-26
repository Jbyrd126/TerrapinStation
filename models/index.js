// import all models here
const User = require('./User');
const Set = require('./Set');

// create any associations here
User.hasMany(Set, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Set.belongsTo(User, {
  foreignKey: 'user_id'
});

// export all models here
module.exports = 
   { User, Set}
;
