const express = require('express');
const router = express.Router();
const gamesApi = require('../services/games.api');
const { isLoggedIn } = require('../middlewares/routes');

router.get("/", isLoggedIn, (req, res, next) => {

    gamesApi
        .getAllGames()
        .then(response => res.render('games/gameList', { games: response.data.results, loggedUser: req.session.currentUser }))
        .catch(err => next(err))

});



router.get('/:id/details', isLoggedIn, (req, res, next) => {

    const { id } = req.params

    gamesApi
        .getOneGame(id)
        .then(response => res.render('games/gameDetails', { game: response.data }))
        .catch(err => next(err))
})

module.exports = router;
