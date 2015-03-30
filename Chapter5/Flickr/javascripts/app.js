var main = function () {
    "use strict";
    
    $(".tag-input button").on("click", function (event){
        var tagName = $("#tagName").val();
        var requestURL = "http://api.flickr.com/services/feeds/photos_public.gne?tags="+tagName+"&format=json&jsoncallback=?";

        $("main .photos").empty();

        $.getJSON(requestURL, function(flickrResponse) {
            flickrResponse.items.forEach(function (item) {

                // create a new JQuery element to hold the image
                // but hide it so we can fade it in
                var $img = $("<img>").hide();

                // set the attribute to the url
                // contained in the response
                $img.attr("src", item.media.m);

                // attach the img tag to the main
                // photos element and then fade it in
                $("main .photos").append($img);
                $img.fadeIn(2000);
            });

        });
    });


/*
      $(".tag-input button").on("keypress", function (event){
        var tagName = $("#tagName").val();
        var requestURL = "http://api.flickr.com/services/feeds/photos_public.gne?tags="+tagName+"&format=json&jsoncallback=?";

        $("main .photos").empty();

        $.getJSON(requestURL, function(flickrResponse) {
            flickrResponse.items.forEach(function (item) {

                // create a new JQuery element to hold the image
                // but hide it so we can fade it in
                var $img = $("<img>").hide();

                // set the attribute to the url
                // contained in the response
                $img.attr("src", item.media.m);

                // attach the img tag to the main
                // photos element and then fade it in
                $("main .photos").append($img);
                $img.fadeIn(2000);
            });

        });
    });
*/





};

$(document).ready(main);
