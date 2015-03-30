(function () {
	"use strict";
	
	var main = function () {
		$('li').on('click', function () {
			$(this).remove();
		});

		$('#goSee').on('click', function () {
			$('li:contains("Home")').text('Avengers: Age of Ultron');
			$('li.hot').html(function () {
				return '<em>' + $(this).text() + '</em>';
			});
			$('li#one').remove();
		});
	};
	
	$(document).ready(function () {
		main();
	});
}());