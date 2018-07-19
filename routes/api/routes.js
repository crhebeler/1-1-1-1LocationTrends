//Defining all of our routes
const router = require("express").Router();
const BirthRoutes = require("../api/birth");
const FloridaSchoolGradeRoutes = require("../api/floridaSchoolGrade");
const DeathsRoutes = require("../api/deaths");
const DivorceRoutes = require("../api/divorce");
const MarriagesRoutes = require("../api/marriages");
const populationProjectionRoutes = require("../api/populationProjection");



//Creating a listener for the routes
router.use("/api/birth", BirthRoutes);
router.use("/api/floridaSchoolGrade", FloridaSchoolGradeRoutes);
router.use("/api/deaths", DeathsRoutes);
router.use("/api/divorce", DivorceRoutes);
router.use("/api/marriages", MarriagesRoutes);
router.use("/api/populationProjection", populationProjectionRoutes);

module.exports = router;
