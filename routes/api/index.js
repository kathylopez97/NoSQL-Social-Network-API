// Finds router and express
const router = require('express').Router();
// Import thought routes
const thoughtsRoutes = require('./thoughtsRoutes');
// Import User Routes
const userRoutes = require ('./usersRoutes');
// Endpoints for userRoutes
router.use('/users',userRoutes);
// Export Routes
// Endpoint for thoughtRoutes
router.use('/thoughts',thoughtsRoutes);

module.exports = router;