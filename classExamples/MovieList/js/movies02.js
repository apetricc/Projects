(function () {
	"use strict";
	
	var main = function () {
		$('li:lt(3)').hide().fadeIn(1500);
		$('li em').parent().addClass('favorite');
		$('li').on('click', function () {
			$(this).remove();
		});
	};
	
	$(document).ready(function () {
		main();
	});
}());