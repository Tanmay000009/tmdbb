var Movie = require("../models/movie");

module.exports.getMovies = function (req, res) {
  try {
    Movie.find(function (err, movies) {
      if (err)
        return res.json({
          Error: "Error fetching movies!",
        });
      res.json(movies);
    });
  } catch (e) {
    return res.json({
      Error: "Error fetching movies!",
    });
  }
};

module.exports.getMovies = function (req, res) {
  try {
    Movie.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  } catch (e) {
    return res.json({
      Error: "Error fetching movie!",
    });
  }
};
