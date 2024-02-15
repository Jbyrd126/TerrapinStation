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

router.get('/city/:city', async (req, res) => {
 const city= req.params.city
  try {
    const setData = await Set.findAll({where:{city:city}});
    const sets = setData.map((set) =>set.get({ plain: true }));
    console.log(`cmon man`, sets);
    res.render("sets", {sets});
    // res.json(sets)
  } catch (err) {
    console.error(`There was an error retrieving data ${req.params.city}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/venue/:venue_name', async (req, res) => {
  const venueName = req.params.venue_name;
   try {
    const setData = await Set.findAll({where:{venueName:venueName}});
    const sets = setData.map((set) => set.get({ plain: true }));
    console.log(`yo man`, sets);
    res.render("sets", {sets});
    // res.json(sets);
  } catch (err) {
    console.error(`There was an error retrieving data for ${req.params.venue_name}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});







module.exports = router;


