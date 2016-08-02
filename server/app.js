"use strict"

let express = require("express");
let app = express();

app.use(express.static(__dirname + "/../client") );



app.get("/sports", (req, res) => {
  res.json(["WeightLifting", "Cycling","Running"]);
});

app.listen(8181, () => console.log("Listening on 8181"));
