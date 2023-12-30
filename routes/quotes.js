const router = require("express").Router();
const {getRandomQuote} = require("../constrollers/quotes");

router.get("/", getRandomQuote);

module.exports = router;