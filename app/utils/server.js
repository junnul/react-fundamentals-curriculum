require('es6-promise')
require('isomorphic-fetch')

const cors = require('cors')
const express = require('express')
const ApiKey = require('../config/ApiKey');

const app = express()
const port = 8081
const router = express.Router()

app.use(cors())

router.route('/forecast/:city')
    .get((request, res) => {
        const baseUrl = 'http://api.openweathermap.org/data/2.5/forecast'
        const requestUrl = `${baseUrl}/daily?q=${request.params.city}&type=accurate&units=metric&APPID=${ApiKey.openweathermap}&cnt=5`

        fetch(requestUrl)
            .then(response => {
                response.json().then(json => {
                    return res.json(json)
                })
            })
    });

app.use('/api', router)

app.listen(port)

console.log('Listening port ' + port)
