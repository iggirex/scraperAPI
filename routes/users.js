var express = require('express');
var router = express.Router();
var cheerio = require('cheerio');
var request = require('request')

// var scrapeDataFromHtml = function(html) {
//   var data = {};
//   var $ = cheerio.load(html);
//   var j = 1;
//   $('h2').each(function() {
//     var a = $(this);
//     var headlines = a.children().text();
//     console.log("this is $this: ", a[0].children[0].data)
//     console.log("this is headline: ", headlines)
//   })
// };

// var scrapeDataFromHtml = function(html) {
//   var data = {};
//   var $ = cheerio.load(html);
//   var j = 1;
//
//   var placeName = $('.place');
//   var placeNameText = placeName.text();
//   console.log("YYYYOOOOOO ------>>>> this is placeName :",placeName)

  // $('.place').each(function(i, e) {
  //   var a = $(this);
  //   console.log("yyyyyyooooooooo THISSS is i & e:  ")
  //
  // })
//   return data;
// };

router.get('/', function(req, res, next) {
  // request("http://www.foodspotting.com/find/best/tofu/in/Denver-CO-USA", function(error, response, body) {
  request("http://www.pmichaud.com/toast/", function(error, response, body) {
    if(!error && response.statusCode === 200) {
      // var data = scrapeDataFromHtml(body);

      var $ = cheerio.load(body);


      $('h2').each(function() {
        var a = $(this)
        var headers = a[0].next.data
        console.log("YYYYOOO THIS IS POPtart BLOWtorch!!!: ", headers)
      })
      res.send("hi");
    }
    return console.log(error);
  })
});

module.exports = router;
