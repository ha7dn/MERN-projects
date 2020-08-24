const router = require('express').Router();
let User = require('../models/user.model');

// handles incoming http get requests
router.route('/').get((req, res) => {
    User.find()  // gets all the users from db. Return a json promise
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error:' + err));
});


// handles incoming http post requests
router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error:' + err));
});

module.exports = router;