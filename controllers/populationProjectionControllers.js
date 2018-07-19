const db = require("../models");

// Defining methods for the PopulationProjectionController
module.exports = {
  findOne: function(req,res) {
      db.PropuationProjection
        .find(req.query)
        .sort({data: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err)); //422 Unprocessable Enttity (WebDAV)
  },
  findAll: function(req, res) {
    db.PropuationProjection
      .find({})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)); //422 Unprocessable Entity (WebDAV)
  },
  findById: function(req, res) {
    db.PropuationProjection
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)); //422 Unprocessable Entity (WebDAV)
  },
  create: function(req, res) {
    db.PropuationProjection
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)); //422 Unprocessable Entity (WebDAV)
  },
  update: function(req, res) {
    db.PropuationProjection
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)); //422 Unprocessable Entity (WebDAV)
  },
  remove: function(req, res) {
    db.PropuationProjection
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)); //422 Unprocessable Entity (WebDAV)
  }
};
