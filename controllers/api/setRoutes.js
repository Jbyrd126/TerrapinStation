const router = require('express').Router();

// import any models you plan to use for this data's routes here
const Set = require('../../models/Set')
// If you would like to you an authGuard middleware, import it here


router.post('/', async (req, res) => {
  console.log('Set attempting to be added');
  try {
    const setData = req.body;
    const newSet = await Set.create(setData);
    res.status(201).json(newSet);
  } catch (err) {
    console.log('There was an error adding data one');
    res.status(500).json(err);
  }
});

// /api/dataOne/:id
// add a delete API route here
router.delete('/:id', async (req, res) => {
  try {
    const setId = req.params.id;
    const updateData = req.body; 
    const updatedSet = await Set.findByIdAndUpdate(setId, updateData, { new: true });
    console.log(`Set with ID ${setId} updated`);
    res.status(200).json(updatedSet);
    console.log(`Set with ID ${setId} attempting to be deleted`);
  } catch (err) {
    console.log(`There was an error deleting data one with ID ${setId}`);
    res.status(500).json(err);
  }
});

// /api/dataOne/:id
// add a put API route here
router.put('/:id', async (req, res) => {
  try {
    const setId = req.params.id;
    const updateData = req.body; // Assuming you expect data in the request body
    const updatedSet = await Set.findOneAndUpdate(setId, updateData, { new: true });
    console.log(`Set with ID ${setId} updated`);
    res.status(200).json(updatedSet);
  } catch (err) {
    console.error(`There was an error updating data one with ID ${setId}`);
    res.status(500).json(err);
  }
});
// /api/dataOne/:id
// add a get API route here
router.get('/:city', async (req, res) => {
 const city= req.params.city
  
  try {
    const setData = await Set.findAll({where:{city:city}});
    const sets = setData.map((set) =>set.get({ plain: true }));
    console.log(`data retrieved`, sets);
    res.render("sets", {sets})
  } catch (err) {
    console.error(`There was an error retrieving data ${req.params.city}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/venue/:venue_name', async (req, res) => {
  try {
    const venueName = req.params.venue_name;
    console.log(venueName);
    const set = await Set.findAll({
      where: {
        venueName: venueName
      }
    });
    
    console.log(`Data one with ID ${venueName} retrieved`);
    res.json(set);
  } catch (err) {
    console.log(err);
    console.error(`There was an error retrieving data one with ID ${req.params.venue_name}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/city/:city', async (req, res) => {
  try {
    const cityName = req.params.city;
    console.log(cityName);
    const set = await Set.findAll({
      where: {
        city: cityName
      }
    });
    console.log(`Data one with ID ${cityName} retrieved`);
    res.json(set);
  } catch (err) {
    console.log(err);
    console.error(`There was an error retrieving data one with ID ${req.params.city}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// // Define route to handle search requests
// app.post('/search', (req, res) => {
//   // Retrieve search parameters from request body
//   const { venue, city, state, songTitle } = req.body;

//   // Perform search based on parameters
//   // Your search logic here...

//   // For demonstration, sending dummy response
//   const searchResults = [];

//   // Send search results as JSON response
//   res.json(searchResults);
// });



module.exports = router;


