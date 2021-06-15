//const axios = require("axios")
const request = require("request")


const url = "api.openweathermap.org/data/2.5/weather?q=London&appid=7159c526ce448236df0dea7e3a80201d"


request(url, (error, response, body) => {
    console.log(body)
})