const path = require("path");
const router = require("express").Router();
const api_index = require("./api");

// API Routes
router.use("/api", api_index.js);



// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
