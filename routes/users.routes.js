const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middlewares/routes')

const User = require("../models/User.model")

//Go to home page users
router.get("/", isLoggedIn, (req, res, next) => {

    res.render("users/profile", { loggedUser: req.session.currentUser });
});



router.get('/userlist', isLoggedIn, (req, res) => {

    User
        .find()
        .then(users => res.render('users/userList', { users }))
        .catch(err => console.log(err))
})


module.exports = router;

