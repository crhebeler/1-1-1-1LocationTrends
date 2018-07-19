const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes/api/routes");
// const db = require('./models');
const mongojs = require("mongojs");
// const logger = require("morgan");

// Define middleware here
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use(express.methodOverride());

// Database configuration
var databaseUrl = "project_db";
var collections = ["birth","deaths","divorce","floridaSchoolGrade","marriages","populationProjection"];

// Hook mongojs config to db variable
const db = mongojs(databaseUrl, collections);

// Log any mongojs errors to console
// db.on("error", function(error) {
//   console.log("Database Error:", error);
// });


// Add routes, both API and view
app.use(routes);

mongoose.Promise = Promise;

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/project_db');

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});