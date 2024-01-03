const request = require('request')

const url = 'https://api.weatherstack.com/current?access_key=156580ac34665b24b5f445f547f2f6d1&query=37.8267,-122.4233'

request({ url: url }, (error, response) => {
    const dataJSON = JSON.parse(response.body)

    console.log(dataJSON.current)
})