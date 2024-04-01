// import model
const { model, Schema } = require('mongoose'); 
const reactionsSchema = require('./Reactions');
// thoughts schema
const thoughtsSchema = new Schema(
    {
        thoughtsText:{
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        postedAt:{
            type: Date,
            default: Date.now,
            get: timestamp => new Date(timestamp).toLocaleString(),
        },
        username:{
            type: String,  
            required: true,
        },
        reactions:[reactionsSchema],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
);

thoughtsSchema.virtual('reactionsNumber').get(function(){
    return this.reactions.length;
});

const Thoughts = model('Thoughts',thoughtsSchema)

module.exports = Thoughts