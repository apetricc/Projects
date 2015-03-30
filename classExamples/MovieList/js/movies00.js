(function () {
  'use strict';
  
  var main = function () {
		$('li').on('click', function () {
			$(this).addClass('complete');
		});
	};

	$('.document').ready(function () {
		main();
	});
}());