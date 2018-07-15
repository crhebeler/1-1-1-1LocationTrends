const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new FloridaSchoolGardeSchema object
// This is similar to a Sequelize model
const FloridaSchoolGradeSchema = new Schema({

  districtnumber: Number,
  SchoolName: String,
  Grade2018: String,
  Grade2017: String,
  Grade2016: String,
  InformationalBaselineGrade2015: String,
  Grade2014: String,
  Grade2013: String,
  Grade2012: String,
  Grade2011: String,
  Grade2010: String,
  Grade2009: String


});

// This creates our model from the above schema, using mongoose's model method
var FloridaSchoolGrade = mongoose.model("FloridaSchoolGrade", FloridaSchoolGradeSchema);

// Export the Florida model
module.exports = FloridaSchoolGrade;

























