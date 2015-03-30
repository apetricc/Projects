/*
* An example of the use of getJSON() to retrieve JSON formatted data
* from an external file.
*
* This script is referred to by page01.html.
*/

var app01main = function () {
	"use strict";
	
	$.getJSON("myBox.json", function(box) {
		console.log(box);
	});
	
	$.getJSON("myBox.json", function(box) {
		var $boxDescription =$("<p>");
		$boxDescription.text("Box width is " + box.width
											+ " Box height is " + box.height
											+ " Box depth is " + box.depth);
		$("main").append($boxDescription);
	});
	
	$.getJSON("boxes.json", function(boxes) {
		var $list = $("<ol>");
		console.log(boxes);
		boxes.forEach(function(box) {
			var $box = $("<li>");
			$box.text("Box width is " + box.width
											+ " Box height is " + box.height
											+ " Box depth is " + box.depth);
			$list.append($box);
		});
		$("main").append($list);
	});

};

$(document).ready(app01main);
