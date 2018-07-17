const router = require("express").Router();
const marriagesControllers = require("../../controllers/marriagesControllers");

// Matches with "/api/marriages"
router.route("/")
  .get(marriagesControllers.findOne)
  .get(marriagesControllers.findAll)
  .post(marriagesControllers.create);

// Matches with "/api/marriages/:id"
router
  .route("/:id")
  .get(marriagesControllers.findById)
  .put(marriagesControllers.update)
  .delete(marriagesControllers.remove);

module.exports = router;
