var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new PopulationProjectionSchema object
// This is similar to a Sequelize model
var PopulationProjectionSchema = new Schema({
  // `2008` must be of type Number
    2008: String,
    2009: String,
    2010: String,
    2011: String,
    2012: String,
    2013: String,
    2014: String,
    2015: String,
    2016: String,
    2017: String,
    County: String,
    2018: String,
    2019: String,
    2020: String,
    2021: String,
    2022: String

});

// This creates our model from the above schema, using mongoose's model method
var PopulationProjection = mongoose.model("PopulationProjection", PopulationProjectionSchema);

// Export the Florida model
module.exports = PopulationProjection;




