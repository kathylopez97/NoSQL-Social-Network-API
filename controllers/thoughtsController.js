// connect thought and user controllers to model
const {Types} = require('mongoose');
// import user thought and reactions from models
const {Users, Thoughts, Reactions} = require('../models');

// this function GETS All Thoughts
const thoughtsController = {
  async getAllThoughts(req, res) {
    try {
      const thought = await Thoughts.find({});
      res.json(thought);
      // if thoughts arent found error will occur
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // this function GETS thought by ID
  async getThoughtsById(req, res) {
    console.log("Get Thoughts by ID",req.body)
    try {
      const thoughts = await Thoughts.findByIdAndUpdate({_id: req.params.thoughtsId});
      // if all thoughts are not found error message will occur
      if (!thoughts) {
        return res.status(404).json({ message: "Thought not found with this ID" });
      } else {
        res.json(thoughts);
      }
      // if thoughts arent received by ID then catch an error message will appear
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // this function CREATES a new thoughts in the DB
  async createThoughts(req, res) { 
    console.log("This is a thought created",req.body)
    try {
      const thoughts = await Thoughts.create(req.body);
      res.status(201).json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // this functions Updates the thoughts
  async updateThoughtsById(req, res) {
    console.log("Update a thought",req.body)
      try {
      const thoughts = await Thoughts.findByIdAndUpdate(
        req.params.thoughtsId,
        req.body,{
        new: true,
      });
      if (!thoughts) {
        res.status(404).json({ message: "Thought not found" });
      } else {
        res.json(thoughts);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // this functions DELETES the thoughts
  async deleteThoughts(req, res) {
    console.log ("Delete a thought",req.body)
    try {
      const thoughts = await Thoughts.findByIdAndDelete(
        req.params.thoughtsId,
        req.body,
        {
          new: true,
        }
      );
      if (!thoughts) {
        return res.status(200).json({ message: "Thought not deleted" });
      } else {
        res.json(thoughts);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Handler for the "create reaction" API endpoint
  async createReactions(req, res) {
  console.log ("Create reactions",req.body)
    try {
      const thoughts = await Thoughts.findOneAndUpdate( 
        { _id: req.params.thoughtsId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );
      thoughts ? res.json(thoughts) : res.status(404).json({ message: Reactionscreated });
    } catch (e) {
      res.status(500).json(e);
    }
  },
  // this functions DELETES reactions
  async deleteReactions(req, res) {
    console.log("Delete reactions",req.body)
    try {
      const thoughts = await Thoughts.findOneAndUpdate(
        {_id: req.params.thoughtsId},
        {$pull: {reactions: {reactionsId: req.params.reactionsid}}},
        {runValidators: true, new: true}
      );
      thoughts ? res.json(thoughts) : res.status(404).json({ message:Reactionsdeleted });
    } catch (e) {
      res.status(500).json(e);
    }
  },

};
// Export ThoughtsController
module.exports = thoughtsController;
