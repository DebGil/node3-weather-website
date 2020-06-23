const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=040f3c636891dbdfa60ba1df5fb23062&query='+ latitude +','+ longitude +'&units=m'

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connecto forecast services', undefined) 
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out. The humidity is ' +  body.current.humidity + '%.')
        }
    })

}



module.exports = forecast