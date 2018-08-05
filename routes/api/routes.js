//Defining all of our routes
const router = require("express").Router();
const BirthRoutes = require("./birth");
const FloridaSchoolGradeRoutes = require("./floridaSchoolGrade");
const DeathsRoutes = require("./deaths");
const DivorceRoutes = require("./divorce");
const MarriagesRoutes = require("./marriages");
const populationProjectionRoutes = require("./populationProjection");
const allRoutes = require("./all");


//Creating a listener for the routes
router.use("/api/birth", BirthRoutes);
router.use("/api/floridaSchoolGrade", FloridaSchoolGradeRoutes);
router.use("/api/deaths", DeathsRoutes);
router.use("/api/divorce", DivorceRoutes);
router.use("/api/marriages", MarriagesRoutes);
router.use("/api/populationProjection", populationProjectionRoutes);
router.use("/api/all", allRoutes);
module.exports = router;
