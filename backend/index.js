var express = require("express");
var cors = require("cors");
var phones = require("./data/phones.json");
var app = express();
app.use(cors());

app.get("/phones", function (req, res) {
  setTimeout(() => {
    res.status(200).json({ data: phones });
  }, 1500);
});

app.listen(5000, function () {
  console.log("App listening on port 5000!");
});
