// Import router
const router = require('express').Router();

const {
    getAllUsers,
    getUsersById, 
    createUsers, 
    updateUsersById, 
    deleteUsersById,
    addFriends, 
    deleteFriends,
    // import controllers
} = require('../../controllers/usersController');

// router get all users
router.route('/').get(getAllUsers)
router.route('/').post(createUsers)

// router get Users  and delete by ID
router.route('/:usersId').get(getUsersById);
router.route('/:usersId').put(updateUsersById);
router.route('/:usersId').delete(deleteUsersById);

// router add friends
router.route('/:usersId/friends/:friendsId').post(addFriends);
router.route('/:usersId/friends/:friendsId').delete(deleteFriends);

// Export module
module.exports = router;