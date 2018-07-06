const router = require("express").Router();
const floridaControllers = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(floridaControllers.findAll)
  .post(floridaControllers.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(floridaControllers.findById)
  .put(floridaControllers.update)
  .delete(floridaControllers.remove);

module.exports = router;
