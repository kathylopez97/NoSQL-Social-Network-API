const {Users} = require('../models');

const usersController ={
// This functions get all Users
getAllUsers(req, res) {
  console.log("get All Users displayed",req.body)
  Users.find({})
  .then(userDb => res.json(userDb))
  .catch(err => res.status(500).json(err));
  },
// This Functions gets all users by ID
  getUsersById(req, res) {
    console.log("get Users by ID",req.body)
    Users.findById(req.params.usersId)
      .then(userDb => res.json(userDb))
      .catch(err => res.status(500).json(err));
  },
  
  // This functions create Users 
  createUsers(req, res) {
    // calls console log
    console.log("Creates Users",req.body)
    Users.create(req.body)
      .then(userDb => res.json(userDb))
      .catch(err => res.status(500).json(err));
  },
  
 // This functions updates Users by ID
  updateUsersById(req, res) {
    console.log("Update Users by ID",req.body)
    Users.findOneAndUpdate(req.params.usersid, req.body, { new: true })
      .then(userDb => {
        if (!userDb) {
          return res.status(404).json({ message: 'User ID not updated' });
        }
        res.json(userDb);
      })
      .catch(err => res.status(500).json(err));
    },

  // This functions delete Users By ID
  deleteUsersById(req, res) {
    console.log("delete Users by ID",req.body)
    Users.findOneAndDelete(req.params.usersid)
      .then(userDb => {
        if (!userDb) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
      })
  
      .catch(err => res.status(500).json(err));
    
  },

  // This functions add friends By ID
  addFriends(req, res) {
    console.log(" Add Friends",req.body)
    Users.findOneAndUpdate(
      { _id: req.params.usersId },
      { $addToSet: { friends: req.body.friendsId || req.params.friendsId} },
      { new: true }
    )
      .then(userDb => {
        if (!userDb) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json(userDb);
      })
      .catch(err => res.status(500).json(err));
  },


  // This functions delete friends
  deleteFriends({ params }, res) {
    Users.findOneAndUpdate(
      { _id: params.usersId },
      { $pull: { friends: params.friendsId } },
      { new: true }
    )
      .then ((userDb) => {
        if (!userDb) {
          return res.status(404).json({ message: "No user with this id!" });
        }
        //verify if delete friend
        const deleted = !userDb.friends.includes(params.friendsId);
        // return response with appropriate message
        if (deleted) {
          res.json({ message: "deleted Friend!", userDb });
        } else {
          res.json(userDb);
        }
      })
      .catch((err) => res.status(400).json(err));
    },
};


// Export UserController
module.exports = usersController;