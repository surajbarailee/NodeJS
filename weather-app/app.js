const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=bf9f22e5d8fa480f75fdadafc480b783&query=27.71,85.32&units=m";

request({ url: url, json: true }, (error, response) => {
  current = response.body.current;
  console.log(
    "It is currently " +
      current.temperature +
      " and feels like " +
      current.feelslike
  );
});
