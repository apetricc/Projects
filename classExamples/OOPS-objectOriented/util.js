/*
* Object.create is built in to JavaScript. The following function 
* gives an idea of what it might look like.
*/

/*
if (typeof Object.create !== 'function') {
  Object.create = function (o) {
    var F = function () {};
    F.prototype = o;
    return new F();
  };
}
*/

/*
* Some methods to make JavaScript syntax a little more palatable.
*/
Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
  return this;
};

Function.method('inherits', function (Parent) {
  this.prototype = new Parent();
  return this;
});

  
