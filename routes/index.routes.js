const { isLoggedIn, isLoggedOut } = require("../middlewares/routes")

const router = require("express").Router()

router.get("/", (req, res, next) => {
    res.render("index")
})

module.exports = router

