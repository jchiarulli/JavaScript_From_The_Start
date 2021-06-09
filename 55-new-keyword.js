// TODO
// Understand function
// using "new" with functions
// new does 4 things:
// new object created;
// new object is prototyped linked (creates the prototype for the object);
// new object set as "this" binding;
// if no return statement exists then a copy of the objec is returned;

log = console.log;

function Car(make, model) {
  //   log(this);
  this.props = {
    make,
    model,
  };
  info = function () {
    return this.props;
  };

  //   return {}; // Causes c3 to fail since we're returning an empty object, so info() is not accessible
  return {
    info: function () {
      log("hi");
    },
  };
}

// Determines there is an object called Car
// then goes to the Car object prototype and creates
// a property called info
// The info property now belongs to every instance
// of the Car object
// When attempting to access c2.info() JS looks up the
// prototype chain to find the method
// Can use this.info inside of Car
Car.prototype.info = function () {
  return this.props;
};

// Without the new keyword we're just calling the function from the global namespace
// This means the this keyword refers to the global namespace
// Without a return statement the default behavior is to retun undefined
let c1 = Car("Honda", "Accord");

// If you have a function and you call it with the keyword new
// it will return a copy of the object
let c2 = new Car("Tesla", "Model 3");

log(c1);
log(c2);

// log(c1.props); // TypeError since c1 is undefined

// When Car.prototype.info or this.info is not used
log(c2.info); // creates a property info in c2 but info is never given a value, so it returns undefined

// When you declare variables inside of a function they only exist in the local scope of the function while the function is running
// If you want the variables to exist outside of the function then the variables need to be attached to the object using the this keyword

log(c2.props);

let c3 = new Car("Ford", "Fusion");
log(c3.info());
