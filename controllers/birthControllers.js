const db = require("../models");

// Defining methods for the BirthController
module.exports = {

  findAll: function(req, res) {

    res.json({
      "2008": "2,980",
      "2009": "2,925",
      "2010": "2,866",
      "2011": "2,960",
      "2012": "2,879",
      "2013": "2,823",
      "2014": "2,916",
      "2015": "2,885",
      "2016": "2,862",
      "2017": "2,826",
      "County": "Alachua",
      "2018 (So far this year)": "1,311",
      "": ""
    });
    // db.Birth
    //   .find({'County': 'Orange '})
    //   .sort({ date: -1 })
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err)); //422 Unprocessable Entity (WebDAV)
  },
  findById: function(req, res) {
    db.Birth
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)); //422 Unprocessable Entity (WebDAV)
  },
  create: function(req, res) {
    db.Birth
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)); //422 Unprocessable Entity (WebDAV)
  },
  update: function(req, res) {
    db.Birth
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)); //422 Unprocessable Entity (WebDAV)
  },
  remove: function(req, res) {
    db.Birth
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)); //422 Unprocessable Entity (WebDAV)
  }
};
