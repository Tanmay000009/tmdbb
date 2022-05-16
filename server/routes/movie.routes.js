//REST routes for movies

var express = require("express");
var router = express.Router();
var Movie = require("../models/movie");

//Get all movies
router.get("/", function (req, res, next) {
  try {
    Movie.find(function (err, movies) {
      if (err) {
        res.status(500).json({
          message: "Database error",
        });
      }
      res.json(movies);
    });
  } catch (e) {
    res.status(404).json({
      message: "No movies found",
    });
  }
});

//Get single movie
router.get("/:id", function (req, res, next) {
  try {
    Movie.findById(req.params.id, function (err, post) {
      if (err) {
        res.status(500).json({
          message: "Database error",
        });
      }

      res.json(post);
    });
  } catch (e) {
    res.status(404).json({
      message: "No movie found",
    });
  }
});

//Create a movie
router.post("/", function (req, res, next) {
  try {
    Movie.create(req.body, function (err, post) {
      if (err) {
        res.status(500).json({
          message: req.body,
        });
      }

      res.json(post);
    });
  } catch (e) {
    res.status(500).json({
      message: "Movie could not be created",
    });
  }
});

//Update a movie
router.put("/:id", function (req, res, next) {
  try {
    Movie.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) {
        res.status(500).json({
          message: "Database error",
        });
      }

      res.json(post);
    });
  } catch (e) {
    res.status(500).json({
      message: "Movie could not be updated",
    });
  }
});

//Delete a movie
router.delete("/:id", function (req, res, next) {
  try {
    Movie.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) {
        es.status(500).json({
          message: "Database error",
        });
      }

      res.json(post);
    });
  } catch (e) {
    res.status(500).json({
      message: "Movie could not be deleted",
    });
  }
});

module.exports = router;
