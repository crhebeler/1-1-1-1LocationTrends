var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new LibrarySchema object
// This is similar to a Sequelize model
var FlordiaSchema = new Schema({
  // `zip` must be of type String
  zip: Integer,
  // `type` must be of type String
  type: String,
  decommissioned: String,
  primary_city: String,
  acceptable_cities: String,
  unacceptable_cities: String,
  state: String,
  county: String,
  timezone: String,
  area_code: Integer,
  world_region: String,
  country: String,
  latitude: Integer,
  longitude: Integer,
  irs_estimated_population_2015: String

});

// This creates our model from the above schema, using mongoose's model method
var Florida = mongoose.model("Florida", FloridaSchema);

// Export the Florida model
module.exports = Florida;




