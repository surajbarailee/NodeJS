const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=bf9f22e5d8fa480f75fdadafc480b783&query=27.71,85.32";

request({ url: url }, (error,response) => {
  const data = JSON.parse(response.body)
  console.log(data.current)
});
