/*
* An example of the use of the get() method.
* This example is referred to by page04.html.
*/

// This example displays the returned object on the console.

(function () {
  $('button').on('click', function() {
    var myStuff = $.get("dao.txt");
    console.log(myStuff);
  });
}());


// This example displays the response text of the returned object.
/*
(function () {
  $('button').on('click', function() {
    var myStuff = $.get("dao.txt", function () {
      var response = myStuff.responseText;
      console.log(response);
    });
  });
}());
*/

// This example creates a bulleted list, on list item for each
// line of the response text.
/*
(function () {
  $('button').on('click', function() {
    var myStuff = $.get("dao.txt", function () {
      var response = myStuff.responseText;
      var lines = response.split("\n");
			var $list = $("<ul>");
			
			lines.map(function(line) {
				var $line = $("<li>");
				$line.text(line);
				$list.append($line);
			});
		$("main").append($list);
  	});
	});
}());
*/
