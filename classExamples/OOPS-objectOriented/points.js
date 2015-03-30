/*
* Examples of a functional approach to objects in JavaScript. Privacy is
* guaranteed by the creation of a closure.
*/

/*
* pointv1 returns an object literal consisting of getters and setters for 
* each of the properties x and y. This approach has the drawback of still
* exposing the slots containing the methods.
*/

function pointv1(x, y) {
  return {
    getX: function () {
      return x;
    },
    
    setX: function (val) {
      x = val;
    },
    
    getY: function () {
      return y;
    },
    
    setY: function (val) {
      y = val;
    }
  };
}


/*
* pointv2 solves the problem that occurs with pointv1 by wrapping the methods
* in another closure.
*/
function pointv2(x, y) {
  return function (msg) {
    if (msg == 'get-x')
      return x;
    if (msg == 'get-y')
      return y;
    if (msg == 'set-x')
      return function (val) {
        x = val;
        return x;
      };
    if (msg == 'set-y')
      return function (val) {
        y = val;
        return y;
      };
    return undefined;
  }
}

/*
* You may find the syntax for calling the methods of pointv2 somewhat unnatural.
* The following set of functions provides 'syntactic sugar' to allow a more 
* natural looking syntax. There is also an inherent polymorphism in this approach.
* getX(p) for example will work correctly for any actual argument that accepts
* a 'get-x' method.
*/
function getX(p) {
  return p('get-x');
}

function getY(p) {
  return p('get-y');
}

function setX(p, val) {
  return p('set-x')(val);
}

function setY(p, val) {
  return p('set-y')(val);
}

