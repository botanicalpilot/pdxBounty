// dependencies
const express = require("express");
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require("../config/keys");

// load validators
const validateRegisterInput = require("../validation/register");
const validateLoginInput  = require("../validation/login");


const User = require('../models/user.model');

// @route POST api/users/register
// @desc Register user 
// @access Public
router.post("/register", (req, res) => {
    // form validation
    const { errors, isValid } = validateRegisterInput(req.body);

    // check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: "Email already registered." });
        } else {
            const newUser = new User ({
                username: req.body.username, 
                email: req.body.email,
                password: req.body.password
            });

            // hash users password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });
        }
    });
});

//login route
// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
    // validate the form
    const { errors, isValid } = validateLoginInput(req.body);

    // check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email  = req.body.email;
    const password = req.body.password;

    // find user by email
    User.findOne({ email }).then(user => {
        // check is user is registered
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" });
        }

        // check user password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // create JWT payload if password matches
                const payload = {
                    id: user.id,
                    name: user.username
                };
                // sign token
                jwt.sign(
                    payload, 
                    keys.secretOrKey,
                    {
                        expiresIn: 31556926
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                );
            } else {
                return res
                .status(400)
                .json({ passwordincorrect: "Invalid Password"});
            }
        });
    });
});

module.exports = router;




// //old router 
// first route to handle get requests. Use find to return a promise
// router.route('/').get((req, res) =>{
//     // use find method to return list users
//     User.find()
//         // return users in json format
//         .then(users => res.json(users))
//         .catch (err => res.status(400).json('Error: ' + err));
// });

// // router for post request
// router.route('/add').post((req, res) => {
//     const username = req.body.username;

//     const newUser = new User({username});

//     newUser.save()
//         .then(() => res.json('User added!'))
//         .catch(err => res.status(400).json('Error: ' + err));
    
// });

// export router
// module.exports = router;
