// get express router
const router = require('express').Router();
const User = require('../models/user.model');
 
// first route to handle get requests. Use find to return a promise
router.route('/').get((req, res) =>{
    // use find method to return list users
    User.find()
        // return users in json format
        .then(users => res.json(users))
        .catch (err => res.status(400).json('Error: ' + err));
});

// router for post request
router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
    
});

// export router
module.exports = router;
