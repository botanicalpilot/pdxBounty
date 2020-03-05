// dependencies
const Validator = require("validator");
const isEmpty = require("is-empty");

// export validate function to frontend registration form
module.exports = function validateRegisterInput(data) {
    let errors = {};

    // convert empty fields to an empty string for validator function
    data.username = !isEmpty(data.username) ? data.username : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password) ? data.password2 : "";

    // validate username
    if (Validator.isEmpty(data.username)) {
        errors.name = "Name field is required";
    }

    // validate email
    if(Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is not valid";
    }

    // validate password
    if (Validator.isEmpty(data.password)) {
        errors.password = "Must enter a password"
    }
    if (Validator.isEmpty(data.password2)) {
        errors.password2 = "You must confirm your password"
    }
    if (!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = "Passwords must be a min of 6 characters or a max of 30 characters"
    }
    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match";
    }


    return {
        errors, isValid: isEmpty(errors)
    };
};