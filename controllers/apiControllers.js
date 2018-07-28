const db = require("../models");

// Defining methods for the BirthController
module.exports = {


 find: function (req, res) { 
    console.log("hello",req.query); 
  
    if(req.query.data.toLowerCase()==="births")  { 
        ///query for by name and year in MONGODB

      db.Birth
        .find({})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err)); ///422 U

    } else if (req.query.data.toLowerCase()==="deaths")  { 
       db.Deaths
         .find({})
         .then(dbModel => res.json(dbModel))
         .catch(err => res.status(422).json(err)); ///422 
         

    } else {
        res.status(404).json({response:"Hello"}); 
    }
    
 
    // Used to check route
    //  res.json({success:true}) 
    db.Birth
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)); //422 Unprocessable Entity (WebDAV)
},
  
  findById: function (req, res) {
    db.Birth
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)); //422 Unprocessable Entity (WebDAV)
  },
  create: function (req, res) {
    db.Birth
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)); //422 Unprocessable Entity (WebDAV)
  },
  update: function (req, res) {
    db.Birth
      .findOneAndUpdate({
        _id: req.params.id
      }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)); //422 Unprocessable Entity (WebDAV)
  },
  remove: function (req, res) {
    db.Birth
      .findById({
        _id: req.params.id
      })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)); //422 Unprocessable Entity (WebDAV)
  }
};