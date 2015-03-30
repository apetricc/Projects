(function() {
	"use strict";
	
	var ntwitter = require("ntwitter"),
			credentials = require("./credentials.json"),
			twitter,
			counts = {};

	counts.awesome = 0;
	counts.cool = 0;
	counts.rad = 0;
	counts.gnarly = 0;
	counts.groovy = 0;
	counts.iconic = 0;

	twitter = ntwitter(credentials);
	twitter.stream(
		"statuses/filter",
		{"track": ["awesome", "cool", "rad", 
							 "gnarly", "groovy", "iconic"]},
		function(stream) {
			stream.on("data", function(tweet) {
				if (tweet.text.indexOf("awesome") > -1) {
						counts.awesome = counts.awesome + 1;
				}
				if (tweet.text.indexOf("cool") > -1) {
						counts.cool = counts.cool + 1;
				}
				if (tweet.text.indexOf("rad") > -1) {
						counts.rad = counts.rad + 1;
				}
				if (tweet.text.indexOf("gnarly") > -1) {
						counts.gnarly = counts.gnarly + 1;
				}
				if (tweet.text.indexOf("groovy") > -1) {
						counts.groovy = counts.groovy + 1;
				}
				if (tweet.text.indexOf("iconic") > -1) {
						counts.iconic = counts.iconic + 1;
				}
			});
		}
	);
	setInterval(function() {
		console.log("awesome: " + counts.awesome);
		console.log("cool: " + counts.cool);
		console.log("rad: " + counts.rad);
		console.log("gnarly: " + counts.gnarly);
		console.log("groovy: " + counts.groovy);
		console.log("iconic: " + counts.iconic);
	}, 3000);
}());
