// Import router and express 
const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtsById,
    createThoughts,
    deleteThoughts,
    updateThoughtsById,
    createReactions,
    deleteReactions,
    // import controllers
} = require('../../controllers/thoughtsController');

// Import router
router.route('/').get(getAllThoughts)
router.route('/').post(createThoughts)
// Retrieves the thought by ID
router.route('/:thoughtsId').get(getThoughtsById);
router.route('/:thoughtsId').put(updateThoughtsById);
router.route('/:thoughtsId').delete(deleteThoughts);
// Import create and delete reactions 
router.route('/:thoughtsId/reactions').post(createReactions);
router.route('/:thoughtsId/reactions/:reactionsID').delete(deleteReactions);
// Export module/router
module.exports = router;