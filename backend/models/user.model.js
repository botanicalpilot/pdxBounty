// This is going to look similar for a;; future schemas. 
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    // add a single field..
    username: {
        type: String,
        required: true,
        unique: true, 
        // trim whitespace off of end
        trim: true,
        minlength: 3
    },
}, {
    // create fields when models is created/modified
    timestamps: true,
}); 

const User = mongoose.model('User', userSchema);

module.exports = User;