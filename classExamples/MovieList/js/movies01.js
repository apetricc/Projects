(function () {
	"use strict";
	
	var main = function () {
		
		var bgcolor;
  
		$('li:lt(3)').hide().fadeIn(1500);
		$('li').on('click', function () {
			$(this).remove();
		});
		$('li').on('mouseenter', function () {
			bgcolor = $(this).css('backgroundColor');
			$(this).css({'backgroundColor': '#30c2ab'});
		});
		$('li').on('mouseleave', function () {
			$(this).css({'backgroundColor': bgcolor});
		});
	};
	
	$(document).ready(function () {
		main();
	});
}());