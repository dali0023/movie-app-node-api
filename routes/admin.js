const express = require("express");
const router = express.Router();
const myController = require("../controllers/myController");

router.get("/", myController.home);
router.get("/results", myController.searchResult);
module.exports = router;
