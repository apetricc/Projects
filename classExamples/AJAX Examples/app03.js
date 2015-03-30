/*
* An example of the load() function. This is referred to by
* page03.html and loads the content of the body of page03a.html.
*/

(function () {
  $('button').on('click', function() {
    $('#stuff').load("page03a.html");
  });
}());