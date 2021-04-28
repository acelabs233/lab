const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Mario = new Schema({
    name: String,
    weight: Number
});

const MarioChar = mongoose.model('mariochar', Mario);
module.exports = MarioChar;