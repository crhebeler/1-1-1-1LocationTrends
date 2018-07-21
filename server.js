const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes/api/routes");
// const db = require('./models');
// const mongojs = require("mongojs");
// const logger = require("morgan");

// Add routes, both API and view
app.use(routes);


// Define middleware here
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


mongoose.Promise = Promise;

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/location_db');


// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);


});