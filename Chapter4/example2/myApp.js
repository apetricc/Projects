var main = function () {
    "use strict";


	$(".comment-input button").on("click", function(event) {
		console.log("Hello world, you must've clicked!'"); //demo of click event listener
	});

/*
	var addCommentFromInputBox = function() {
		var $new_comment;

		if ($(".comment-input input").val() !== "") {
			$new_comment = $("<p>").text($(".comment-input input").val());
			$new_comment.hide();
			$(".comments").append($new_comment);
			$new_comment.fadeIn();
			$(".comment-input input").val("");
		}
	};

	$(".comment-input button").on("click", function (event) {
		addCommentFromInputBox();
   
	});
   

	$(".comment-input input").on("keypress", function (event) {
		if (event.keyCode === 13) {
			addCommentFromInputBox();
		}
	});
	*/
};		
					
$(document).ready(main);
