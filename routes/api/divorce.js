const router = require("express").Router();
const divorceControllers = require("../../controllers/divorceControllers");

// Matches with "/api/divorce"
router.route("/")
  // .get(divorceControllers.findOne)
  .get(divorceControllers.findAll)
  .post(divorceControllers.create);

// Matches with "/api/divorce/:id"
router
  .route("/:id")
  .get(divorceControllers.findById)
  .put(divorceControllers.update)
  .delete(divorceControllers.remove);

module.exports = router;
