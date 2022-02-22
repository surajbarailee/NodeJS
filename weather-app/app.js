const request = require("request");
const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");



const address = process.argv[2]

if(!address){
  return console.log('Please Provide an address')
}

geoCode(address, (error, {latitude,longitude,location}={}) => {
  if (error) {
    return console.log(error);
  }
  forecast(latitude, longitude, (error, forecastData) => {
    if (error) {
      return console.log(error);
    } 
    console.log("In " + location + " , " + forecastData)
  });
});
