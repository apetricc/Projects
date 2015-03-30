/*
* This program uses a brute force method in order to get
* some practice in using looping mechanisms.
*/
(function () {

  var main = function() {
    console.log(smallestDivisible(20));
  };
    
  var smallestDivisible = function(num) {
    var next = num, i;
    while (true) {
      i = 2;
      while (i < num+1 && next % i == 0) i++;
      if (i > num) return next;
      next+=num; // Counts by num to speed up the loop by a factor of num.
    }
  };
    
  main();

}());
