// Import schema
const { Types, Schema } = require('mongoose');
// import reactions 
const reactionsSchema = new Schema(
  {
    reactionsId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionsBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    postedBy: {
      type: Date,
      default: Date.now,
      get: timestamp => new Date(timestamp).toLocaleDateString()
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

//module exports

module.exports = reactionsSchema