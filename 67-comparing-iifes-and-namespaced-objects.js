// Comparing Immdiately Invoked Function Expressions (IIFE)
// and Namespaces as wrappers for your code

let objNS = {
  name: "Object Namespace",
  init: function () {
    // start the ball rolling
    objNS.name = "New value";
    objNS.action();
    this.action();
  },
  action: function () {
    // do some task
  },
};

objNS.init();

// let objIIFE = (function () {
//   let myPrivateVar = "hidden value";
//   let myPrivateFunc = function () {
//     console.log("Private function running");
//   };

//   return {
//     name: "Object IIFE",
//     init: function () {
//       // start the ball rolling
//       objIIFE.name = "new value";
//       this.action();
//     },
//     action: function () {
//       // do some task
//       myPrivateFunc();
//     },
//   };
// })();

// objIIFE.init();
// myPrivateFunc() // ReferenceError

let objIIFE = (function () {
  let myPrivateVar = "hidden value";
  let myPrivateFunc = function () {
    console.log("Private function running");
  };

  let init = function () {
    // start the ball rolling
    console.log(myPrivateVar);
  };

  init();

  return {
    name: "Object IIFE",
    // init: init,
    action: function () {
      // do some task
      myPrivateFunc();
    },
  };
})();

objIIFE.init();
objIIFE.action();
