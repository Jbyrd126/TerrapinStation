const router = require('express').Router();
const homeRoutes = require('./homeRoutes')
// Import all of the routes from controllers here

// Connect the routes to the router here
router.use('/', homeRoutes)
module.exports = router;
