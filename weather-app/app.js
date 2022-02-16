const request = require("request");
const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");



const address = process.argv[2]

if(!address){
  return console.log('Please Provide an address')
}

geoCode(address, (error, data) => {
  if (error) {
    return console.log(error);
  }
  forecast(data.latitude, data.longitude, (error, forecastData) => {
    if (error) {
      return console.log(error);
    } 
    console.log("In " + data.location + " , " + forecastData)
  });
});
