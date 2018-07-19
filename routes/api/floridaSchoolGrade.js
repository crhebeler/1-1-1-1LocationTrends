const router = require("express").Router();
const FloridaSchoolGradeControllers = require("../../controllers/floridaSchoolGradeControllers");

// Matches with "/api/FloridaSchoolGrade"
router.route("/")
  .get(FloridaSchoolGradeControllers.findAll)
  .post(FloridaSchoolGradeControllers.create);

// Matches with "/api/FloridaSchoolGrade/:id"
router
  .route("/:id")
  .get(FloridaSchoolGradeControllers.findById)
  .put(FloridaSchoolGradeControllers.update)
  .delete(FloridaSchoolGradeControllers.remove);

module.exports = router;
