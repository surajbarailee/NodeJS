

const path = require('path')
const express = require("express");

const app = express();

const publicDirectoryPath = path.join(__dirname,"../public")

app.use(express.static(publicDirectoryPath))

app.get("", (req, res) => {
  res.send("<h1>Hello Express</h1>");
});


app.get("/home", (req, res) => {
    res.send({
        "andrew":23
    });
  });
  
  



app.listen(2222,()=>{
    console.log('started the server')
})
