const router = require("express").Router();
const deathsControllers = require("../../controllers/deathsControllers");

// Matches with "/api/deaths"
router.route("/")
  .get(deathsControllers.findOne)
  .get(deathsControllers.findAll)
  .post(deathsControllers.create);

// Matches with "/api/deaths/:id"
router
  .route("/:id")
  .get(deathsControllers.findById)
  .put(deathsControllers.update)
  .delete(deathsControllers.remove);

module.exports = router;
