// IIFE - Immediately Invoked Function Expressions

function doSomething() {
  // function declaration - if no return statement it will return undefined
}

(function doSomething1() {
  // function declaration
})();

var somethingElse = function () {
  // function expression
  return true;
};

// Example of an IIFE
// var somethingElse1 gets hoisted to the top, then when this line is
// reached JS determines there is a function in there and it sees the
// () which runs the function and the return value gets passed to
// somethingElse1
// Often used to create modules within the code
// Basically creating a namespace where the properties are private
var somethingElse1 = (function (nm) {
  // function expression
  return {
    name: nm,
    id: 123,
    x: function () {},
  };
})("Bob");

console.log(somethingElse1.name, somethingElse1.id);
somethingElse1.x();
// doSomething; // like shouting out a name - does nothing
// doSomething(); // actually runs the function and waits for a return value

// somethingElse; // does nothing
// somethingElse(); // actually runs the functions and waits for a return value
