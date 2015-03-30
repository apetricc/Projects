var main = function () {
    "use strict";
    
    
        var requestURL = "http://api.lyricsnmusic.com/songs?api_key=[977c73accdb06e003e38fca4119db6]&q=rolling%20%20Clocks&format=json&jsoncallback=?";
      
        console.log("button pressed");
        $.getJSON(requestURL, function(lyricResponse) {
            
                console.log(lyricResponse);


        });
    


};

$(document).ready(main);
