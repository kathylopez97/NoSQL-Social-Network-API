// Import connect, mongoose to DB
const mongoose = require('mongoose');
// Connects mongoose string fom socialnetworkDB in MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/socialnetdb');
// module exports
module.exports = mongoose.connection;
