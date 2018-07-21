const db = require("../models");

// Defining methods for the MarriagesController
module.exports = {
 
  findAll: function(req, res) {
    db.Marriages
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)); //422 Unprocessable Entity (WebDAV)
  },
  findById: function(req, res) {
    db.Marriages
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)); //422 Unprocessable Entity (WebDAV)
  },
  create: function(req, res) {
    db.Marriages
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)); //422 Unprocessable Entity (WebDAV)
  },
  update: function(req, res) {
    db.Marriages
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)); //422 Unprocessable Entity (WebDAV)
  },
  remove: function(req, res) {
    db.Marriages
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)); //422 Unprocessable Entity (WebDAV)
  }
};
