const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const userRoutes = require('./api/userRoutes');
const setRoutes = require('./api/setRoutes');
// Import all of the routes from controllers here

// Connect the routes to the router here




router.use('/users', userRoutes);
router.use('./api/setRoutes.js', setRoutes);
router.use('/', homeRoutes);

module.exports = router;
