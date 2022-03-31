const express = require("express");
const router = express.Router();
const tourController = require("../controllers/tourController");

router.route("/").post(tourController.createTour);

module.exports = router;
