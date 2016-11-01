var express = require('express');
var router = express.Router();
var cheerio = require('cheerio');
var request = require('request')

// var url = "https://news.google.com/";


/* GET users listing. */
router.get('/', function(req, res, next) {
  request("https://news.google.com/", function(error, response, body) {
    if(!error && response.statusCode === 200) {
      var data = scrapeDataFromHtml(body);
      res.send(data);
    }
    return console.log(error);
  })
});

module.exports = router;

//commit this to github L8Tr
