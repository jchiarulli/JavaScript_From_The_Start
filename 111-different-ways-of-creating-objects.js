/****************************************
Creating Objects

1. Object literals
2. Object.create() with descriptors
3. function + new
4. factory function with closures
5. JS Class
****************************************/
let log = console.log;

// 1. Object literals ////////////////////////////////////
// Cons - creates only one instance of the object, i.e., a singleton
let obj1 = {
  prop1: "value1",
  prop2: "value2",
  prop3: function () {
    console.log(this.prop1);
  },
};
log(1, obj1);
obj1.prop3();
log("------------------------------");

// 2. Object.create ////////////////////////////////////

// let proto = {
//   prop3: function () {
//     console.log(this.prop1);
//   },
// };
// let obj2 = Object.create(proto, {
//   prop1: {
//     writable: true, // are you able to change the value
//     enumerable: true, // when looping over the object, e.g., in a console.log() should the property be displayed
//     configurable: true, // allowed to change values of these property descriptors
//     value: "value1",
//   },
//   prop2: {
//     writable: true,
//     enumerable: false,
//     configurable: true,
//     value: "value2",
//   },
// });
// obj2.prop3 = function () {
//   console.log(this.prop1);
// };
// log(2, obj2);
// obj2.prop3();
// log("------------------------------");

let obj2 = Object.create(
  {},
  {
    prop1: {
      writable: true, // are you able to change the value
      enumerable: true, // when looping over the object, e.g., in a console.log() should the property be displayed
      configurable: true, // allowed to change values of these property descriptors
      value: "value1",
    },
    prop2: {
      writable: true,
      enumerable: false,
      configurable: true,
      value: "value2",
    },
  }
);
obj2.prop3 = function () {
  console.log(this.prop1);
};
log(2, obj2);
obj2.prop3();
log("------------------------------");

// 3. new + function ////////////////////////////////////
// Creates a new instance of the object
let Obj = function (v1, v2) {
  this.prop1 = v1;
  this.prop2 = v2;
  this.prop3 = function () {
    console.log(this.prop1);
  };
};
let obj3 = new Obj("value1", "value2");
log(3, obj3);
obj3.prop3();
log("------------------------------");

// 4. factory function with closures
let ObjFF = function (v1, v2) {
  let _prop1 = v1;
  let _prop2 = v2;
  return {
    prop1: _prop1,
    prop2: _prop2,
    prop3: function () {
      console.log(_prop1);
    },
  };
};
let obj4 = ObjFF("value1", "value2");
log(4, obj4);
obj4.prop3();
log("------------------------------");

// 5. JS Class
class ObjC {
  constructor(v1, v2) {
    this.prop1 = v1;
    this.prop2 = v2;
  }
  prop3() {
    console.log(this.prop1);
  }
}
let obj5 = new ObjC("value1", "value2");
log(5, obj5);
obj5.prop3();
