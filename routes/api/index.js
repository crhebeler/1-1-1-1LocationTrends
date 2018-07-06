
const router = require("express").Router();
const floridaRoutes = require("./Florida");

// Book routes
router.use("/Florida", floridaRoutes);

module.exports = router;
