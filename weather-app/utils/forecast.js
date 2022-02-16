const request = require("request");
const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=bf9f22e5d8fa480f75fdadafc480b783&query=" +
    latitude +
    "," +
    longitude +
    "$units=d";
  request({ url: url, json: true }, (error, response) => {
    if(error){
        callback('ERROR',undefined)

    }else if(response.body.error){
        callback('UNABLE TO FIND LOCATIONS',undefined)

    }else{
        callback(undefined,"The temperature is " + response.body.current.temperature + " degree celcius.")
    }



  });
};

module.exports = forecast;
