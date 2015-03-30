/*
(function() {
	"use strict";
	
	var main = function() {
		var url = 'http://api.sunrise-sunset.org/json?lat=35.59&lng=-82.29&callback=?';
		$.getJSON(url, function(sunResponse) {
			console.log(sunResponse);	
		});
	};
	
	$(document).ready(main);
}());
*/

/*
(function() {
	"use strict";
	
	var main = function() {
		var url = 'http://api.sunrise-sunset.org/json?lat=35.59&lng=-82.29&callback=?';
		$.getJSON(url, function(sunResponse) {
			var $sunTable = $('<table>');
			var response = sunResponse.results;
			console.log(response);
		});
	};
	
	$(document).ready(main);
}());
*/


(function() {
	"use strict";
	
	var main = function() {
		var url = 'http://api.lyricsnmusic.com/songs?api_key=[977c73accdb06e003e38fca4119db6]&q=coldplay%20clocks&callback=?';
		$.getJSON(url, function(lyricResponse) {
            var $lyricTable = $('<table>');
            var lyricResponse = lyricResponse.results;
            console.log(lyricResponse);
			}
			
			
		});
	};
	
	$(document).ready(main);
}());
