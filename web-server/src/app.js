const hbs = require("hbs")
const path = require("path");
const express = require("express");

const app = express();


const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath  = path.join(__dirname,"../templates/views")
const partialPath = path.join(__dirname,"../templates/partials")

app.set("view engine", "hbs");
app.set("views",viewsPath)
hbs.registerPartials(partialPath)
app.use(express.static(publicDirectoryPath));



app.get("", (req, res) => {
  res.render("index.hbs",{
    "title":"weather app",
    "name": "NameLess GameLess"
  })
});

app.get("/home", (req, res) => {
  res.send({
    andrew: 23,
  });
});

app.get("*",(req,res)=>{
  res.send("MY 404 PAGE")
})

app.listen(2222, () => {
  console.log("started the server");
});
