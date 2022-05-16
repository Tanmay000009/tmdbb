const express = require("express");

const router = express.Router();
const homeController = require("../controllers/home.controller");
console.log("router loaded");

router.get("/", homeController.home);
router.use("/movies", require("./movie.routes"));

module.exports = router;
