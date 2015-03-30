(function () {
	"use strict";
	
	var main = function () {
		// example 1
		/*
		var $listHTML = $('ul').html();
		$('ul').append($listHTML);
		*/

		// example 2
		/*
		var $listText = $('ul').text();
		$('ul').append('<p>' + $listText + '</p>');
		*/

		// example 3 
		/*
		var $listItemHTML = $('li').html();
		$('li').append('<i>' + $listItemHTML + '</i>');
		*/

		// example 4
		/*
		var $listItemText = $('li').text();
		$('li').append('<i>' + $listItemText + '</i>');
		*/
		
		// example 5
		/*
		$('li').each(function () {
			var ids = this.id;
			$(this).append(' <em>' + ids + '</em>');
		});
		*/
		
		$('li').on('click', function () {
			$(this).remove();
		});
 
	};
	
	$(document).ready(function () {
		main();
	});
}());