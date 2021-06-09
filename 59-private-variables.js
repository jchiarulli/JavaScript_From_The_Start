// creating private variables in JS with functions
// IIFE - Immediately Invoked Function Expression

// Puts the object we're returning into the variable obj
let obj = (function () {
  let _prop1 = "Starman";
  return {
    prop2: 1981,
    get prop1() {
      return "Movies: " + _prop1;
    },
    set prop1(_val) {
      _prop1 = _val;
    },
  };
})();

for (let prop in obj) {
  console.log(prop);
}

console.log(obj.prop2); // 1981
console.log(obj.prop1); // Starman

obj.prop1 = "The Big Lebowski";
console.log(obj.prop1);

console.log(obj._prop1); // private variable returns undefined
