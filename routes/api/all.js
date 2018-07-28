const router = require("express").Router();
const apiControllers = require("../../controllers/apiControllers");

// Matches with "/api/birth"
router.route("/")
  .get(apiControllers.find)
  



module.exports = router;