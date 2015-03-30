(function () {
	"use strict";
	
	var main = function () {
		$('li').on('click', function () {
			$(this).animate({
				opacity: 0.0,
				paddingLeft: '+400'
			}, 3000, "swing", function () {
				$(this).remove();
			});
		});
	};
	
	$(document).ready(function () {
		main();
	});
}());