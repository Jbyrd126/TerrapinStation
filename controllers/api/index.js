const router = require('express').Router();
const userRoutes = require('./userRoutes');
const setRoutes = require('./setRoutes');

router.use('/users', userRoutes);
router.use('/set', setRoutes);

module.exports = router;
