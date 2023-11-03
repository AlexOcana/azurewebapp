const express = require('express');
const router = express.Router();
const { isLoggedIn, checkRoles } = require('../middlewares/routes');
const Foro = require('../models/Foro.model')


//List
router.get("/", isLoggedIn, (req, res, next) => {

    Foro
        .find()
        .then(comments => res.render("forum/comments", { comments }))
        .catch(err => console.log(err))

});

//Create
router.get("/create-comment", (req, res) => {
    res.render("forum/create-comment")
})

router.post("/create-comment", (req, res) => {

    const { user, subject, platform, gameName, description } = req.body

    Foro
        .create({ user, subject, platform, gameName, description })
        .then(() => res.redirect("/forum"))
        .catch(err => console.log(err))
})


//Edit
router.get("/edit/:comment_id", isLoggedIn, (req, res) => {

    const { event_id } = req.params

    Event
        .findById(event_id)
        .then(comment => res.render("forum/edit-comment", comment))
        .catch(err => console.log(err))
})


router.post('/edit/:comment_id', isLoggedIn, (req, res) => {

    const { comment_id } = req.params
    const { comment, subject, platform, description } = req.body

    Event
        .findByIdAndUpdate(comment_id, { comment, subject, platform, description })
        .then(() => res.redirect('/forum'))
        .catch(err => console.log(err))
})


//Delete
router.post("/delete/:comment_id", checkRoles('ADMIN'), (req, res) => {

    const { comment_id } = req.params

    Foro
        .findByIdAndDelete(comment_id)
        .then(() => res.redirect('/forum'))
        .catch(err => console.log(err))

})


module.exports = router;
