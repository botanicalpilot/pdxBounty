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

    email: {
        type: String,
        require: true, 
        trim: true
    }, 

    password:{
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        // //attempting to validate outside this model in validation dir
        // validate(value){
        //     if(validator.isEmpty(value)){
        //         throw new Error('Please enter a password')
        //     } else if(validator.equals(value.toLowerCase(), "password")){
        //         throw new Error('Password too common')
        //     } else if(validator.contains(value.toLowerCase(), "password")){
        //         throw new Error('Password cannot contain password')
        //     }
        // }
    }, 

}, {
    // create fields when models is created/modified
    timestamps: true,
}); 

const User = mongoose.model('User', userSchema);

module.exports = User;