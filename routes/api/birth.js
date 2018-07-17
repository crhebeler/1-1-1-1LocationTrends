const router = require("express").Router();
const birthControllers = require("../../controllers/birthControllers");

// Matches with "/api/birth"
router.route("/")
  .get(birthControllers.findOne)
  .get(birthControllers.findAll)
  .post(birthControllers.create);

// Matches with "/api/birth/:id"
router
  .route("/:id")
  .get(birthControllers.findById)
  .put(birthControllers.update)
  .delete(birthControllers.remove);

module.exports = router;
