const db = require("../models");

// Defining methods for the BirthController
module.exports = {


 find: function (req, res) { 
    console.log("hello",req.query); 
    var county = req.query.name;
    var year = req.query.year;

    var countyObj = {"County": county}
    var yearObj = {[year]: 1, "County": 1}

    console.log("year obj", yearObj)
  
    if(req.query.data.toLowerCase()==="births")  { 
        ///query for by name and year in MONGODB
      db.Birth
        .find(countyObj, yearObj)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err)); ///422 U



    } else if (req.query.data.toLowerCase()==="deaths")  { 
       db.Deaths
         .find({})
         .then(dbModel => res.json(dbModel))
         .catch(err => res.status(422).json(err)); ///422 
         
    } else if (req.query.data.toLowerCase()==="marriages") {
       db.Marriages
         .find({})
         .then(dbModel => res.json(dbModel))
         .catch(err => res.status(422).json(err)); ////422

    }  else if (req.query.data.toLowerCase()==="marriage-dissolution")   {
        db.Divorce
        .find({})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    
    }  else if (req.query.data.toLowerCase()==="school-grades") {
        db.FloridaSchoolGrade
        .find({})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));

    }  else if ( req.query.data.toLowerCase()==="population-growth") {
        db.PopulationProjection
        .find({})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err)); ///422

        } else {
        res.status(404).json({response:"Hello"}); 
    }
  }, 
}; 