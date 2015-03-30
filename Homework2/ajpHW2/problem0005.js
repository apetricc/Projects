
//Andrew Petriccione
//gives 232792560

var specialNum = 2;
var divEm = function() {


    while (true) {
    
    var doneLooking = true;     

            for (i = 2; i < 21; i++){
                
                if ( specialNum % i != 0 ){
                    doneLooking = false;
                    break;
                };
                };

            if (doneLooking) {
                console.log("The special number is: " +specialNum + "!");
                    break;
            };

        specialNum++;
    };

};

divEm();