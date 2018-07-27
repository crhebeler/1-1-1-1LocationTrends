const db = require("../models");

// Defining methods for the BirthController
module.exports = {


  findAll: function (req, res) {
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