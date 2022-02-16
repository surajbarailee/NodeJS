const request = require("request");
const geoCode = require('./utils/geo_code')





geoCode("Philadelphia New York", (error, data) => {
  if (error){
    console.log(error)
  }
  else{

    console.log(data);
  }
});
