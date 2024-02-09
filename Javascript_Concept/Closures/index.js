function subscriber() {
  var name = "Harsh";
  function displayName() {
    // console.log(name);
  }
  return displayName;
}
const term = subscriber();
term();

// ------------------------------------------------------------

function subscriber1() {
  var name = "Harsh";
  function displayName(num) {
    // console.log(name, num);
  }
  return displayName;
}
subscriber1()(5);

// -------------------------------------------------------------

// clouser scope chain :-

var a = 10;
function sum(b) {
  return function (c) {
    return function (d) {
      return function (e) {
        return a + b + c + d + e;
      };
    };
  };
}

// console.log(sum(20)(30)(40)(50));

// ---------------------------------------------------------------

let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1;
    // console.log(count);
  }
  //   console.log(count);
})();

// ------------------------------------------------------------------

function createBase(a) {
  return function (b) {
    // console.log(a + b);
  };
}

var addsix = createBase(6);
addsix(10); // return 16
addsix(21); // return 27

// ---------------------------------------------------------------

function find() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }

  return function (index) {
    // console.log(a[index]);
  };
}
let clousre = find();
// console.time("6");
clousre(6);
// console.timeEnd("6");
// console.time("12");
clousre(12);
// console.timeEnd("12");

// ------------------------------------------------------------------------

function aa() {
  for (var i = 0; i < 3; i++) {
    (function (index) {
      setTimeout(() => {
        // console.log(index);
      }, 1000);
    })(i);
  }
}
aa();

// ---------------------------------------------------------------

// private counter :-

function counter() {
  var _counter = 0;

  function add(increment) {
    _counter += increment;
  }

  function retrive() {
    return "Counter = " + _counter;
  }

  return {
    add,
    retrive,
  };
}

const c = counter();

c.add(5);
c.add(10);

// console.log(c.retrive());

// -----------------------------------------------------------

// Make this run only once :-

let view;
function likeVideo() {
  let called = 0;
  return function () {
    if (called > 0) {
      console.log("Already to Subscribe");
    } else {
      view = "UnixPlayz";
      console.log("Subscribe to ", view);
      called++;
    }
  };
}
let isSubscribe = likeVideo();
isSubscribe();
isSubscribe();
isSubscribe();
isSubscribe();
isSubscribe();
