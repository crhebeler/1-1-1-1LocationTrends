const router = require("express").Router();
const FloridaSchoolGradeControllers = require("../../controllers/FloridaSchoolGradeControllers");

// Matches with "/api/FloridaSchoolGrade"
router.route("/")
  .get(FloridaSchoolGradeControllers.findOne)
  .get(FloridaSchoolGradeControllers.findAll)
  .post(FloridaSchoolGradeControllers.create);

// Matches with "/api/FloridaSchoolGrade/:id"
router
  .route("/:id")
  .get(FloridaSchoolGradeControllers.findById)
  .put(FloridaSchoolGradeControllers.update)
  .delete(FloridaSchoolGradeControllers.remove);

module.exports = router;
