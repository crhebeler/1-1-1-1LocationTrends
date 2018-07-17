const router = require("express").Router();
const divorceControllers = require("../../controllers/divorceControllers");

// Matches with "/api/divorce"
router.route("/")
  .get(deathsControllers.findOne)
  .get(deathsControllers.findAll)
  .post(deathsControllers.create);

// Matches with "/api/divorce/:id"
router
  .route("/:id")
  .get(divorceControllers.findById)
  .put(divorceControllers.update)
  .delete(divorceControllers.remove);

module.exports = router;
