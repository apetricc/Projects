/*
* This example uses a fully functional style to implement
* prototypal inheritance. The groundhog function takes an
* additional parameter specifying the object that is to
* be the groundhog's parent. Notice the addition of a 'get-name'
* message to the groundhog object. The reason for this is that 
* in prototypal inheritance, the prototype is an object in its
* own right and may have a name of its own.
*/

var mammal = function (name) {
  return function (msg) {
    if (msg === 'get-name')
      return name;
    if (msg === 'has-fur')
      return true;
    return 'unknown message to mammal: ' + msg;
  };
};

var groundhog = function (name, parent) {
  return function (msg) {
    if (msg === 'get-name')
      return name;
    if (msg === 'sunny') 
      return 'Six more weeks of winter!';
    if (msg === 'cloudy')
      return 'Two more weeks of winter.';
    return parent(msg);
  };
};
    