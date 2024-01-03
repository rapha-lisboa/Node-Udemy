const request = require('request')

const url = 'https://api.weatherstack.com/current?access_key=156580ac34665b24b5f445f547f2f6d1&query=-22.9068,-43.1729&units=m'

request({ url: url, json: true }, (error, response) => {
    const data = response.body.current

    console.log(data.weather_descriptions[0] + ". It is currently", data.temperature, "degrees, but it feels like", data.feelslike, "degrees")
})