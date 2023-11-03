const express = require('express');
const router = express.Router();
const { isLoggedIn, checkRoles, isLoggedOut } = require('../middlewares/routes');

const Event = require('../models/Event.model')

////////// LISTA DE EVENTOS /////////////////

router.get("/", isLoggedIn, (req, res, next) => {

    Event
        .find()
        .then(eventsfromdataBase => res.render("events/listEvents", { events: eventsfromdataBase }))
        .catch(err => console.log(err))

});

/////     CREAR NUEVO EVENTO     ////
router.get("/create", checkRoles('ME'), (req, res) => {
    res.render("events/createEvents")
})

router.post("/create", checkRoles('ME'), (req, res) => {

    const { eventName, description, platform, eventDate, eventURL } = req.body
    // const { _id: owner } = req.session.currentUser
    res.send(req.body)
    Event
        .create({ eventName, description, platform, eventDate, eventURL },)
        .then(events => res.redirect("/events"))
        .catch(err => console.log(err))
})



//////     DETALLES DEL EVENTO

router.get('/:event_id/details', isLoggedIn, (req, res, next) => {

    const { _id: event_id } = req.params

    Event
        .findById(event_id)
        .then(event => res.render('events/detailsEvents', event))
        .catch(err => console.log(err))

})
//////////////////////////////


module.exports = router;
