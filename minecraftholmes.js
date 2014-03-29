var Twit = require('twit');
var T = new Twit(require(__dirname + '/twitter.js'));
var http = require('http');

// Get a random integer between min and max http://stackoverflow.com/a/12885196/300278
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

setInterval(function() {
  var parseString = require('xml2js').parseString;
  http.get('http://thegamesdb.net/api/GetGame.php?id=' + getRandomInt(0, 20000), function(res) {
    res.on('data', function(d) {
      xml = d.toString();
      console.log(xml);
      try { 
        parseString(xml, function(err, result) {
          if (typeof(result.Data) != "undefined") {
            game = result.Data.Game[0].GameTitle[0] + " Holmes";
            console.log(game);
            T.post('statuses/update', { status: game}, function(err, reply) {
              console.log("error: " + err);
              console.log("reply: " + reply);
            });
          }
        });
      }
      catch (err) {
        console.log("error: " + err);
      }
    });
  });
},2700000 + Math.floor(Math.random() * 1800000));
