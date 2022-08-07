var express = require("express");
var app = express(); // Init Express APP
var server = require("http").Server(app);
const cors = require("cors"),
  config = require("dotenv").config(),
  customEnvConfig = require('custom-env').env()
path = require("path"),
  bodyParser = require("body-parser");
require("../config/connect-mongoose");
require("../models");
// app.use(express.static(path.join(__dirname, "../../public")));
app.use("/images", express.static(path.join(__dirname, "../../public/images")));
app.use(express.static(path.join(__dirname, "../../../client/build")))


app.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(401);
    res.json({ message: err.name + ": " + err.message });
  }
});
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
console.log(process.env.DATABASE_URL)

var route = require("../routes");
app.use("/api", route);

app.get("/main", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../public", "index.html"));
});



// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    error: { code: err.code, msg: err.message },
  });
});


if (process.env.NODE_ENV === "staging") {
  app.use("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../../../client/build", "index.html"))
  })
}

console.log("here port before is", process.env.PORT)
server.listen(process.env.PORT || 5000, () => {
  console.log(`Server Running ON Port ${process.env.PORT}`);
});
