var main = function () {    /*Stuff in main would be more secure I guess???*/
    
    "use strict";
    
   window.alert("Hello, world!");
};



$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});



$(document).ready(main);