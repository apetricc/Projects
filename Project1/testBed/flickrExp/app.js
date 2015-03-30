var main = function () {
    "use strict";
    
    //this is actually one string
    //but I spread it over two lines
    //to make it more readable
    
    var url= "https://api.flickr.com/services/feeds/forums.gne";

    $ .getJSON(url, function (flickrResponse) {
        flickrResponse.items.forEach(function (photo){
            // create a new jQuery element to hold the image
            // but hide it so we can fade it in
            var $img = $("<img>").hide();
            
            // set the attribute to the url 
            // contained in the response        
            $img.attr("src", photo.media.m);
            
            // attach the img tag to the main 
            // photos element and then fade it in
            $("main .photos").append($img);
            $img.fadeIn(10000);
        });
        
    });
     
};

$(document).ready(main);