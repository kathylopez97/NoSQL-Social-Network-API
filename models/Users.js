// Import schema
const { Schema, model, Types } = require('mongoose');
//import User Schema
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: "Enter your username",
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: "Enter your email",
      unique: true,
      validate: { 
        validator: function(v) {
            return /^([a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4})$/.test(v);
        }
    }
  },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      }
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual('friendsNumber').get(function () {
  return this.friends.length;
});

// Creating the User model from the userSchema
const Users = model('Users',userSchema)
// Exporting the User model as a module
module.exports = Users