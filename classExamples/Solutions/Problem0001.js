/*
* Uses a brute force method to get some practice with JavaScript loops.
*/
(function () {
    "use strict";

    var main = function () {
        var sum = 0, i=0;
        for (i=1; i<1000; i++) {
          if (i % 3 === 0 || i % 5 === 0)
            sum += i;
        }
        
        console.log('The total of multiples of 3 or 5 less than 1000 is ' + sum);
    };

    main();
}());