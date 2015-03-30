(function () {
	"use strict";
	
	var main = function () {
		$('li').on('click', function () {
			$(this).remove();
		});

		$('#goSee').on('click', function () {
			$('ul').before('<p class="notice">Just updated</p>');
			$('li.hot').prepend('+ ');
			var $newListItem = $('<li>Terminator Genisys</li>');
			$('li:last').after($newListItem);
		});
	};
	
	$(document).ready(function () {
		main();
	});
}());