var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new FLASchoolGardeSchema object
// This is similar to a Sequelize model
var FloridaSchoolGradeSchema = new Schema({
  // `name` must be of type String
  // `name` must be unique, the default mongoose error message is thrown if a duplicate value is given
  districtnumber: {
    Type: Integer,
    unique: true,
    CountyDistrict: String,
    SchoolName: String,
    Grade2018: String,
    Grade2017: String,
    Grade2016: String,
    InformationalBaselineGrade2015: String ,
    Grade2014: String,
    Grade2013: String,
    Grade2012: String,
    Grade2011: String,
    Grade2010: String,
    Grade2009: String

  },

  // `Florida` is an array that stores ObjectIds
  // The ref property links these ObjectIds to the Book model
  // This allows us to populate the FloridaSchoolGrade with any associated city in Florida
  Florida: [
    {
      type: Schema.Types.ObjectId,
      ref: "Florida"
    }
  ]
});

// This creates our model from the above schema, using mongoose's model method
var FloridaSchoolGrade = mongoose.model("FloridaSchoolGrade", FloridaSchoolGradeSchema);

// Export the Library model
module.exports = FloridaSchoolGrade;



