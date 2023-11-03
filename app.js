
require("dotenv").config();

require("./db");

const express = require("express");

const hbs = require("hbs");

const { updateLoggedUser } = require('./middlewares/user.guard')

const app = express();

require("./config")(app);

require("./config/session.config")(app)

const capitalize = require("./utils/capitalize");

const projectName = "PROYECTO-2-ALEX-JOAN";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;

app.use(updateLoggedUser)

//------------------------Rutas------------------------------//
const indexRoutes = require("./routes/index.routes")
app.use("/", indexRoutes)

const gamesRoutes = require("./routes/games.routes")
app.use("/games", gamesRoutes)

const usersRoutes = require("./routes/users.routes")
app.use("/users", usersRoutes)

const eventsRoutes = require("./routes/events.routes")
app.use("/events", eventsRoutes)

const authRoutes = require("./routes/auth.routes")
app.use("/auth", authRoutes)

//-------------------------------------------------------------//

require("./error-handling")(app);

module.exports = app;
