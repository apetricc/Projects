//Andrew Petriccione

var total = 0;
var count = 0;

var addem = function(limit) {
while(count<limit) {
    if((count%3==0)||(count%5==0)) {
	total += count;
    };
count++;
};
};

addem(1000);
console.log("The sum of all factors of 3 or 5 less than 1000 is: " + total);