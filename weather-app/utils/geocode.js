const request = require('request')

const geoCode = (address, callback) => {
    const encoded_address = encodeURIComponent(address);
  
    const url =
      "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
      encoded_address +
      ".json?access_token=pk.eyJ1Ijoic3VyYWpiYXJhaWxlZSIsImEiOiJja3pwcDFnMDkwbmhxMnBwZTl4ZnNkc2RiIn0.94MNEdjLDaObSBL6kjczQA";
    
    request({ url: url, json: true }, (error, response) => {
      if (error) {
        callback("Unable to Connect to location service", undefined);
      } else if (response.body.features.length === 0) {
        callback("Unable to Connect to location service", undefined);
      } else {
        console.log('location is ' + response.body.features[0].place_name)
        callback(undefined, {
          latitude: response.body.features[0].center[1],
          longitude: response.body.features[0].center[0],
          location: response.body.features[0].place_name,
          
        });
      }
    });
  };

module.exports = geoCode