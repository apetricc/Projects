var main = function () {
	var toDos = ["Get groceries",
				 "Make up some new lists",
				 "Check my email",
				 "Take Trixie out for a walk",
			     "Finish reading this book"];  //this is the end of the var "toDos"
   					
	$(".tabs a span").toArray().forEach(function (element) {
		var $element = $(element);

		//create a click handler for this element
		
		$element.on("click", function() {
			var $content,
				$input,
				$button,
				i;  //end declaring multiple vars
			
			$(".tabs a span").removeClass("active");
			$element.addClass("active");
			$("main .content").empty();

			if ($element.parent().is(":nth-child(1)")) {
				//newest first, so we have to 
				//go through the array backwards
				$content = $("<ul>");
				for (i = toDos.length-1; i >= 0; i--) {
					$content.append($("<li>").text(toDos[i])));
				}
			} else if ($element.parent().is(":nth-child(2)")) {
				//oldest first, so we go through the array forwards
				$content = $("<ul>");
				toDos.forEach(function (todo) {
					$content.append($("<li>").text(todo));
				});
			} else if ($element.parent().is(":nth-child(3)")) {
				//input a new to-do
				$input = $("<input>"),
				$button = $("<button>").text("+");

				$button.on("click", function () {
					if ($input.val() !== "") {
						toDos.push($input.val());
						$input.val("");
					}
				});

				$content = $("<div>").append($input).append($button);
				/* Alternatively append() allows multiple arguments so the
				above can be done with $content = $("<div>").append($input, $button); */
			}
			
			$("main .content").append($content);

			return false;
		});
	});

	$(".tabs a:first-child span").trigger("click");



};  //this is the closing bracket of the original function "main"

$(document).ready(main);
