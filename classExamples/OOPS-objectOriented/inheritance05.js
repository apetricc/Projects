/*
* This example uses a full functional style to return functions
* rather than JavaScript objects. It is an implementation of
* classical (Java style) inheritance. Inheritance is managed by
* passing unrecognized messages on to the parent.
*/

var mammal = function (name) {
  return function (msg) {
    if (msg === 'get-name')
      return name;
    return 'unknown message';
  };
};

var groundhog = function (name) {
  var parent = mammal(name);
  
  return function (msg) {
    if (msg === 'sunny') 
      return 'Six more weeks of winter!';
    if (msg === 'cloudy')
      return 'Two more weeks of winter.';
    return parent(msg);
  };
};
    