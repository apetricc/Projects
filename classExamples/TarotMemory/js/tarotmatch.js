(function () {
	"use strict";

	var matchingGame = { };

	matchingGame.deck = [
		'thefool120', 'thefool120',
		'themagician120', 'themagician120',
		'thehermit120', 'thehermit120',
		'thelovers120', 'thelovers120',
		'strength120', 'strength120',
		'thehangedman120', 'thehangedman120'
	];

	var main = function () {
		matchingGame.deck.sort(shuffle);

		var i;
		for (i = 0; i < 11; i++) {
			$('.card:first-child').clone().appendTo('#cards');
		}

		$('#cards').children().each(function (index) {
			$(this).css({
				"left"  : ($(this).width() + 20) * (index % 4),
				"top"   : ($(this).height() + 20) * Math.floor(index / 4)
			});
			var pattern = matchingGame.deck.pop();
			$(this).find('.front').addClass(pattern);
			$(this).attr('data-pattern', pattern);
			$(this).on('click', selectCard);
		});
	};

	var shuffle = function () {
		return 0.5 - Math.random();
	};

	var selectCard = function () {
		if ($('.card-flipped').size() > 1) {
			return;
		}
		$(this).addClass('card-flipped');
		if ($('.card-flipped').size() === 2) {
			setTimeout(checkPattern, 2000);
		}
	};

	var checkPattern = function () {
		if (isMatchPattern()) {
			$('.card-flipped').removeClass('card-flipped').addClass('card-removed');
			$('.card-removed').on('transitionEnd', removeTakenCards);
		} else {
			$('.card-flipped').removeClass('card-flipped');
		}
	};

	var isMatchPattern = function () {
		var cards = $('.card-flipped');
		var pattern = $(cards[0]).data('pattern');
		var anotherPattern = $(cards[1]).data('pattern');
		return pattern === anotherPattern;
	};

	var removeTakenCards = function () {
		$('card-removed').remove();
	};

	$('.document').ready(main);
}());