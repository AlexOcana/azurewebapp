const axios = require('axios')
require('dotenv').config()

class GamesApiHandler {

    constructor() {

        this.axiosApp = axios.create({
            baseURL: 'https://api.rawg.io/api'

        })
    }

    getAllGames() {

        return this.axiosApp.get(`/games?key=${process.env.API_KEY}`)

    }


    getOneGame(id) {

        return this.axiosApp.get(`/games/${id}?key=${process.env.API_KEY}`)
    }

}

const GamesApi = new GamesApiHandler()

module.exports = GamesApi
