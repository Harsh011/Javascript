/*
// Question 1 : Duplicate Value remove

const arr = [2, 5, 6, 5, 4, 8, 2, 6];
const DuplicateArr = arr.filter((val, index) => {
//   return arr.indexOf(val) !== index;  // [5,2,6]
  return arr.indexOf(val) === index;  // [2, 5, 6, 4, 8 ]
});
console.log(DuplicateArr);
*/

// ---------------------------------------------------------------

/*
// Question 2 : find max/min value

const arr = [1, 9, 85, 67, 99, 150];
const MaxNu = () => {
  return arr.reduce(function (prev, curr) {
    return prev > curr ? prev : curr;
  });
};
const MinNu = () => {
  return arr.reduce(function (prev, curr) {
    return prev < curr ? prev : curr;
  });
};

console.log(MaxNu(arr));
console.log(MinNu(arr));
*/

// -----------------------------------------------------------------------

/*
//Question 3: how to find second largest value in array

const arr = [2, 9, 5, 8];
const firstLargestValue = Math.max(...arr);
const index = arr.indexOf(firstLargestValue);
arr.splice(index, 1);
const secondLargestValue = Math.max(...arr);

console.log(secondLargestValue);
*/

// --------------------------------------------------------------

/*
// Question 4: difference between filter and find

const arr = [55, 20, 25, 66, 78, 45, 36];

const filterNum = arr.filter((item) => {
  return item > 30;
});
console.log(filterNum);

const findNum = arr.find((item) => {
  return item > 30;
});

console.log(findNum);
*/

// -----------------------------------------------------------------

/*
// Question 5: find missing number

const arr = [1, 2, 3, 4, 6, 9, 10];
const missArr = [];
function MissNum() {
  const maxVal = Math.max(...arr);
  const minVal = Math.min(...arr);
  for (i = minVal; i < maxVal; i++) {
    if (arr.indexOf(i) < 0) {
      missArr.push(i);
    }
  }
  return missArr;
}

console.log(MissNum(arr));
*/

// ---------------------------------------------------------------------------

/*
// Question 6 : odd and even number find

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const even = () => {
  return arr.filter((item) => {
    return item % 2 === 0;
  });
};
console.log(even(arr));

const odd = () => {
  return arr.filter((item) => {
    return item % 2 !== 0;
  });
};
console.log(odd(arr));
*/

// -------------------------------------------------------------------------

/*
// Question 7 : sum of all element of array

const arr = [1, 5, 9, 6];
const sum = arr.reduce((prev, curr) => {
  return prev + curr;
});

console.log(sum);
*/

// ----------------------------------------------------------------------------

/*
// Question 8 : Factorial Number

const Factorial = (n) => {
  if (n === 0 || n === 1) return 1;
  return n * Factorial(n - 1);
};

console.log(Factorial(5));

*/

// ---------------------------------------------------------------------------

/*

// Question 9 : find prime number

const PrimeFun = (n) => {
  if (n === 0 || n <= 1) {
    console.log("Not a Prime Number less than 2");
  } else if (n % 2 === 0) {
    console.log("NOt a prime num");
  } else {
    console.log("it is prime number");
  }
};

PrimeFun(1);

*/

// -----------------------------------------------------------------------------

/*

// Question 10: find vowels string

const str = "b";

if (str === "a" || str === "e" || str === "i" || str === "o" || str === "u") {
  console.log("it is vowels");
} else {
  console.log("it is not vowels");
}

const string = "Harsh";

const vowels = (str) => {
  let arr = ["a", "e", "i", "o", "u"];
  var count = 0;
  for (let letter of str.toLowerCase()) {
    if (arr.includes(letter)) {
      count++;
    }
  }
  return count;
};
console.log(vowels(string));

*/

// -----------------------------------------------------------------------------

/*

// Question 11 : reverse the string

const reverse = (str) => {
  return str.split("").reverse().join("");
};

console.log(reverse("harsh"));

*/

// ------------------------------------------------------------------------------

/*
// Question 12 : Palindrome Number

const Palindrome = (n) => {
  return n === n.toString().split("").reverse().join(""); // string
  //   return n === +n.toString().split("").reverse().join(""); // Number
};

console.log(Palindrome("madam"));

*/

// -------------------------------------------------------------------------------

/*
// Question 13 : swap two number

let a = 15;
let b = 10;
let temp;

// temp = a;
// a = b;
// b = temp;

[a, b] = [b, a];

console.log(a);
console.log(b);

*/

// --------------------------------------------------------------------------------

/*
// Question 14 : Merge two array and sort
let arr = [1, 5, 9];
let arr1 = [8, 6, 10];

// const result = arr.concat(arr1);
const result = [...arr, ...arr1];
result.sort((a, b) => a - b);
console.log(result);

*/

// ---------------------------------------------------------------------------------

/*

// Question 15 : find the factor to given integer

let num = 15;
for (let i = 0; i <= num; i++) {
  if (num % i == 0) {
    console.log(i);
  }
}

*/

// ----------------------------------------------------------------------------------

/*

// Question 16 : Intersection two array

let arr = [2, 9, 6, 8, 4, 4, 4];
let arr1 = [4, 8, 6, 9, 12];

let newArr = arr.filter((item) => {
  return arr1.includes(item);
});

console.log([...new Set(newArr)]);

 */

// ---------------------------------------------------------------------------------

/*
// Question 17 : reverse all string new character Hello world || olleh dlrow

const str = "hey hi i am harsh";

const result = str.split(" ").map((item) => {
  return item.split("").reverse().join("");
});

const joinNew = result.join(" ");
console.log(joinNew);

*/

// ------------------------------------------------------------------------------

/*

// Question 18 : How to check if an object is an array or not

function IsArray(item) {
  return Array.isArray(item);
}

console.log(IsArray([]));
console.log(IsArray({}));

*/

// ----------------------------------------------------------------------------------

/*
// Question 19 : How to empty an array in javascript
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.length = 0;
console.log(arr);

*/

// -------------------------------------------------------------------------------

// Question 20 : Implicit and Explicit Binding

// var obj = {
//   name: "Harsh",
//   display: function () {
//     console.log(this.name);
//   },
// };

// var obj1 = {
//   name: "ABC",
// };

// obj.display.call(obj1);

// ------------------------------------------------

// Question 21 : Implement caching/Memoize Function

// const clumsysquare = (num1, num2) => {
//   for (let i = 0; i < 100000000; i++) {}

//   return num1 * num2;
// };

// console.time("First call");
// console.log(clumsysquare(9467, 7649));
// console.timeEnd("First call");
// console.time("Second call");
// console.log(clumsysquare(9467, 7649));
// console.timeEnd("Second call");

// -------------------------------------------------------

/*
// Question 22 :- Infintie Currying

function add(a) {
  return function (b) {
    if (b) return a + b;
    return a;
  };
}

console.log(add(5)(2)(4)(8)(10)());
*/

// ----------------------------------------------------------------------
/*
// Question 23 :-
let a = 10,
  b = 10,
  c = 10;

if ((a == b) == c) {  //a==b==c
  console.log("Hello");//1 == c (1==10) false
} else {
  console.log("By By"); //by by
}
*/

// ---------------------------------------------------------------

/*
//  Question 24 :-
 
console.log("1 :- ", 8 + "5");
console.log("2 :- ", "5" + 8);
console.log("3 :- ", 8 - "5");
console.log("4 :- ", "5" - 8);
console.log("5 :- ", "1" - -"1");
console.log("6 :- ", "1" + +"1");
console.log("7 :- ", "1" - +"1");
console.log("8 :- ", "1" + -"1");
console.log("9 :- ", "9" > "11");
console.log("10 :- ", "9" > 11);
console.log("11 :- ", "" > -1);
console.log("12 :- ", "Rowdy" > 1);
*/

// --------------------------------------------------------------------------

/*
// Question 25 :-

var length = 10;
function fn() {
  console.log("hi", this.length);
}
var obj = {
  length: 5,
  method: function (fn) {
    fn();
    arguments[0]();
  },
};
obj.method(fn, 1);

*/

// ------------------------------------------------------------------------
/*
// Question 26 :-

(function () {
  console.log(1);
  setTimeout(() => {
    console.log(2);
  }, 1000);
  setTimeout(() => {
    console.log(3);
  }, 0);
  console.log(4);
})(); // 1 4 3 2

*/

// ----------------------------------------------------------------

/*
// Question 27 :-

function add() {
  console.log(1);
  setTimeout(() => {
    console.log(2);
  }, 1000);
  setTimeout(
    (function () {
      console.log(3); // adding IEF function
    })(),
    0
  );
  console.log(4);
}
add(); // 1 3 4 2
*/
