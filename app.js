var express = require("express");
var bodyParser = require("body-parser");
var cors = require('cors');
var routes = require("./routes/routes.js");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

routes(app);

var server = app.listen(3000, function () {
    console.log("app running on port.", server.address().port);
});