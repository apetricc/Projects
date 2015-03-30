/*
* The standard approach to creating objects in JavaScript. This approach
* depends on the use of constructors and the 'new' keyword. It is the
* so-called 'pseudo-classical' style.
*/
var Mammal = function (name) {
  this.name = name;
};

Mammal.prototype.getName = function () {
  return this.name;
};

Mammal.prototype.says = function () {
  return this.saying || '';
};

var Cat = function (name) {
  this.name = name;
  this.saying = 'meow';
};

/*
* The Cat prototype is a Mammal with a name. The name in the Cat object 
* shadows the name in the Mammal prototype. If Cat did not have a name 
* property, it would inherit from its Mammal prototype.
*/
Cat.prototype = new Mammal('bill');

var Dog = function (name) {
  this.name = name;
  this.saying = 'bowwow';
};

Dog.prototype = new Mammal();

Mammal.prototype.runs = function () {
  return this.speed || '';
};

Dog.prototype.speed = 'slow';
