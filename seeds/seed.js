

const fs = require('fs'); // Import the 'fs' module for file system operations
const path = require('path');
const sequelize = require('../config/connection');
const { User, Set } = require('../models');

const userData = require('./userData.json');
// const userData = JSON.parse(fs.readFileSync(userDataPath, 'utf8'));
const showData = require('./show.json')
// Read and import the data from show.json


// const setPath = path.join(__dirname, './sets.json');
// const setData = JSON.parse(fs.readFileSync(setPath, 'utf8'));

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('Sequelize synced');

  // bulkCreate your users here
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  console.log('Users created');

  // Bulk create DataOne using show.json data


    for (const set of showData) {
      const randomUser = users[Math.floor(Math.random() * users.length)];
      console.log(`Random user for Set: ${randomUser.id}`);
      
      await Set.create({
        ...set,
        user_id: randomUser.id,
      });
  }
  console.log('Set created');

  process.exit(0);
};

seedDatabase();