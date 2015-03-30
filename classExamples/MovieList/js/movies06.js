(function () {
	"use strict";
	
	var displayDate = function (givenDate) {
		return givenDate.getMonth()
			+ '/' + givenDate.getDate()
			+ '/' + givenDate.getFullYear() % 100;
	};
	
	var main = function () {
		$('li').on('dblclick', function () {
			var currentDate = new Date();
			$(this).addClass('complete');
			$(this).append(": " + displayDate(currentDate));
			$(this).on('dblclick', function () {
				$(this).remove();
			});
		});
	};
	
	$(document).ready(function () {
		main();
	});
}());