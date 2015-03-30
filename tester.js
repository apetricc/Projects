// A template for testing Javascript/JQuery.

/*(function () {
  "use strict";
  
  
  var squareEm = function (numArray) {
    var i, newArray = [];
    for (i=0; i<numArray.length; i++) {
        newArray.push(numArray[i] * numArray[i]);
    }
    console.log(newArray);
  };

squareEm([1,2,3,4]);

  */
  
var distribute = function(x) {
     return function(y,z) {
        return (x*(y+z));
     }
}

distribute(3,5,4);



/*
  $(document).ready(function () {
    main();
  });
}());
*/