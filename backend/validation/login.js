// dependencies 
const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
    let errors = {};

    // convert empty fields into strings for validation
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    // check email
    if (Validator.isEmpty(data.email)) {
        errors.email = "Please enter your email";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    // check password
    if(Validator.isEmpty(data.password)) {
        errors.password = "Please enter your password";
    }

    return {
        errors, 
        isValid: isEmpty(errors)
    };
};