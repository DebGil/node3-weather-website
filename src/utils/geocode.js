const request = require('request')


const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiZGV2dXRhIiwiYSI6ImNrYmxjdjNjZDBiajMzMXF0b21meWxldHAifQ.9Lp_WAJIRi9ZI-XDEo5Acg&limit=1'
    
    request({url, json:true}, (error, {body}) => {
        if (error) {
            callback('Unable to connecto location services', undefined) 
        } else if (body.features.length === 0) {
            callback('Unable to find location, try another search', undefined)
        } else {
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                locationName: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode