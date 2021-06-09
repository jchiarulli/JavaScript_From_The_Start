// New ways of decalring methods for objects
// getters and setters for object properties

var log = console.log;
let x = 7;

// var obj = {
//     prop1: 1979,
//     prop2: "Alien",
//     prop3: function() {

//     }
// }

// obj.prop1 = 1980;

// ES6 way of decalring methods and properties
let obj = {
  _prop1: 1979,
  get prop1() {
    return this._prop1;
  },
  set prop1(_val) {
    this._prop1 = _val;
  },
  prop2: "Alien",
  x,
  prop3() {
    log("called prop3");
  },
};

obj.prop3();
log(obj.x);

log(obj.prop1);
obj.prop1 = 1980;
log(obj.prop1);

log(obj._prop1); // _prop1 is still accessible
