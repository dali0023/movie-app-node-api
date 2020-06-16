const path = require("path");
const request = require("request");
const home = (req, res, next) => {
  res.render("home", {
    pageTitle: "The Leargest Movies Site",
  });
};

const searchResult = (req, res, next) => {
  let query = req.query.search;
  request(
    "https://api.themoviedb.org/3/search/movie?api_key=5ceea36c01dbab074d43e1774b4f179c&query=" +
      query,
    (error, response, body) => {
      if (error) {
        console.log(error);
      }
      let data = JSON.parse(body);
      res.render("movies", {
        data: data,
        searchQuery: query,
        pageTitle: "Search Result",
      });
    }
  );
};

module.exports = { home, searchResult };
