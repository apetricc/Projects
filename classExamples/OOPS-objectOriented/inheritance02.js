/*
* This example is essentially the pseudo-classical style with some 
* syntactic sugar as defined in the file util.js. It uses a 'cascading'
* style where each function call returns an object that itself has
* methods that can be called. So, for example, the definition of Cat
* returns a Cat object which has an inherits method. The inherits method
* itself returns the original Cat object so that the method method
* can be called on it.
*/

var Mammal = function (name) {
  this.name = name;
};

Mammal.method('getName', function () {
  return this.name;
});

Mammal.method('says', function () {
  return this.saying || '';
});

var Cat = function (name) {
  this.name = name;
  this.saying = 'meow';
}.
  inherits(Mammal).
  method('purr', function (n) {
    var i, s = '';
    for (i=0; i<n; i++) {
      if (s) s += '-';
      s += 'r';
    }
    return s;
  }).
  method('getName', function () {
    return this.says() + ' ' + this.name + ' ' + this.says();
  });

var Dog = function (name) {
  this.name = name;
  this.saying = 'bowwow';
}.
  inherits(Mammal);
  
var Groundhog = function (name) {
  this.name = name;
}.
  inherits(Mammal).
  method('says', function (day) {
    if (day === 'sunny')
      return 'Six more weeks of winter!';
    else
      return 'Two more weeks of winter.';
  });