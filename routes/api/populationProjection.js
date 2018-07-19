const router = require("express").Router();
const populationProjectionControllers = require("../../controllers/populationProjectionControllers");

// Matches with "/api/populationProjection"
router.route("/")
  .get(populationProjectionControllers.findAll)
  .post(populationProjectionControllers.create);

// Matches with "/api/populationProjection/:id"
router
  .route("/:id")
  .get(populationProjectionControllers.findById)
  .put(populationProjectionControllers.update)
  .delete(populationProjectionControllers.remove);

module.exports = router;
