const router = require('express').Router();
const { Set, User } = require('../models');


router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const setData = await Set.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const sets = setData.map((set) => set.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('home', { 
      sets, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/set/:id', async (req, res) => {
  try {
    const setData = await Set.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const set = setData.get({ plain: true });

    res.render('set', {
      ...set,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
