const request = require('postman-request')

const forecast = (latitude,longitude,callback) => {
    const url = `http://api.weatherstack.com/current?access_key=1feb21ae585cb27da0ba177f0ae0cee9&query=${latitude},${longitude}&units=f`
    request({url, json: true},(error,{body})=> {
        if(error) {
            callback('Unable to connect to weather services')
        } else if(body.error){
            callback('This is not a simple error')
        } else {
            const {temperature, feelslike, weather_descriptions} = body.current
            callback(undefined, `${weather_descriptions[0]? weather_descriptions[0]: 'For today '}. It it currently ${temperature} degress, but it feels like ${feelslike} `)
        }
    })
}

module.exports = forecast
