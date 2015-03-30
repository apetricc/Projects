/*
* An example of the pseudo-classical style that uses Object.create
* rather than calling the constructor directly.
*/

var myMammal = {
  name: 'Herb the Mammal',
  getName: function () {
    return this.name;
  },
  says: function () {
    return this.saying || '';
  }
};

var myCat = Object.create(myMammal);
myCat.name = 'Henrietta';
myCat.saying = 'meow';
myCat.purr = function (n) {
    var i, s = '';
    for (i=0; i<n; i++) {
      if (s) s += '-';
      s += 'r';
    }
    return s;
};
myCat.getName = function () {
    return this.says() + ' ' + this.name + ' ' + this.says();
};
