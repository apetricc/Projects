/*
* This example of inheritance uses the functional style to create
* JavaScript objects that inherit from other JavaScript objects in
* a pseudo-classical style. Note that, in order for a groundhog
* object to have access to it's parent's name, the getName method
* must be explicitly stated in the groundhog object. A property
* called 'superior' allows the object to have direct access to 
* the properties and methods of its parent.
*/

var mammal = function (name) {
  return {
    getName: function () {
      return name;
    },
    
    says: function () {
      return 'not much';
    }
  };
};

var groundhog = function(name) {
  var superior = mammal(name);
  return {
    
    parent: superior,
    
    getName: superior.getName,
    
    says: function (val) {
      if (val === 'sunny') 
        return 'Six weeks until spring!';
      else
        return 'Two weeks until spring.';
    }
  };
};
    


