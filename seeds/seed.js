// const sequelize = require('../config/connection');
// const { User, DataOne } = require('../models');
// import any models you want to seed here

// import any data you want to seed here
// const userData = require('./userData.json');
// const seeds = require('../models/DataOne');

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });
//   console.log('Sequelize synced');

//   // bulkCreate your users here
//   // hint- use your activities!
  
//   const users = await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });


//   console.log('Users created');

//   // Here is an example of how you can randomly assign a user to your data!
//   for (const seed of seeds) {
//     // gets a random user
//     const randomUser = users[Math.floor(Math.random() * users.length)];
//     console.log(`Random user for dataOne: ${randomUser.id}`);
//     // assigns the user to the data
//     await DataOne.create({
//       ...seed,
//       user_id: randomUser.id,
//     });
//   }
//   console.log('Data One created');
//   // console.log(favorite)
//   process.exit(0);
// };

// seedDatabase();

const fs = require('fs'); // Import the 'fs' module for file system operations
const path = require('path');
const sequelize = require('../config/connection');
const { User, DataOne } = require('../models');

const userDataPath = path.join(__dirname, './userData.json');
const userData = JSON.parse(fs.readFileSync(userDataPath, 'utf8'));

// Read and import the data from show.json
const showDataPath = path.join(__dirname, '../db/show.json');
const showData = JSON.parse(fs.readFileSync(showDataPath, 'utf8'));

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
  for (const show of showData) {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    console.log(`Random user for DataOne: ${randomUser.id}`);
    
    await DataOne.create({
      ...show,
      user_id: randomUser.id,
    });
  }
  console.log('Data One created');

  process.exit(0);
};

seedDatabase();