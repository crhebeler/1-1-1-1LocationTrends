var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new DeathsSchema object
// This is similar to a Sequelize model
var DeathsSchema = new Schema({
  // `2008` must be of type Number
  2008: Number,
  2009: Number,
  2010: Number,
  2011: Number,
  2012: Number,
  2013: Number,
  2014: Number,
  2015: Number,
  2016: Number,
  2017: Number,
  County: String,
  2018: Number

});

// This creates our model from the above schema, using mongoose's model method
var Deaths = mongoose.model("Deaths", DeathsSchema);

// Export the Florida model
module.exports = Deaths;

