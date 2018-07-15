var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new PopulationProjectionSchema object
// This is similar to a Sequelize model
var PopulationProjectionSchema = new Schema({
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
    2018: Number,
    2019: Number,
    2020: Number,
    2021: Number,
    2022: Number

});

// This creates our model from the above schema, using mongoose's model method
var PopulationProjection = mongoose.model("PopulationProjection", PopulationProjectionSchema);

// Export the Florida model
module.exports = PopulationProjection;




