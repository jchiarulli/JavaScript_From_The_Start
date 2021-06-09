// Understanding what "this" is
"use strict";

let box = document.querySelector(".box");
let log = console.log;

// Here this points to the context of the regular function
let myFunc = function () {
  log("1", this);
  setTimeout(() => {
    log("3", "timed out", this);
  }, 250);
};

// Here this points to where the parent was declared
// which in this case is th global namespace
let myFunc2 = () => {
  log("2", this);
  setTimeout(() => {
    log("3", "timed out", this);
  }, 250);
};

box.addEventListener("mousedown", myFunc);
box.addEventListener("mouseup", myFunc2);

// myFunc();
// myFunc.call(window);
// myFunc.call(box);

// If using "use-strict" then myFunc() will treat the "this" keyword as undefined
// myFunc();
// myFunc.apply(window);
// myFunc.apply(box);

// myFunc2();
// myFunc2.call(window);
// myFunc2.call(box);
