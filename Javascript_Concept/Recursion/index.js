/*
// Factorial Number :-
function Factorial(n) {
  if (n === 0) return 1;
  return n * Factorial(n - 1);
}

console.log(Factorial(5));
*/

// ------------------------------------------------

/*
// Crate an array withe range of number
// Input :- start = 1, end =5 -----> outpur:-

function rangeOfNumber(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const number = rangeOfNumber(startNum, endNum - 1);
    number.push(endNum);
    return number;
  }
}

console.log(rangeOfNumber(0, 5));
*/

// ------------------------------------------------------

//Fibonacci Number :-
/*
// without Recursion :-
var fib = function (n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr;
};

console.log(fib(5));
*/

/*
// with Recurrsion
function fibRecursion(n) {
  let arr = [];
  if (n <= 1) return n;
  return fibRecursion(n - 2) + fibRecursion(n - 1);
}
console.log(fibRecursion(5));
*/

// -------------------------------------------------

/*
// Reverse the string :-
function reverseString(str) {
  if (str === "") {
    return "";
  } else {
    return reverseString(str.substr(1) + str.charAt(0));
  }
}

console.log(reverseString("Hello"));
*/

// ----------------------------------------------------

// input [1,2,3] ---> output [[],[1],[2],[1,2],[3],[]]  multiple sets of array combine this Number

function subsets(nums) {
  let result = [];
  let temp = []; //[1]

  function recursionSubsets(nums, i) {
    if (i === nums.length) {
      return result.push([...temp]);
    }

    temp.push(nums[i]); //
    recursionSubsets(nums, i + 1);
    temp.pop();
    recursionSubsets(nums, i + 1);
  }

  recursionSubsets(nums, 0);
  return result;
}

console.log(subsets([1, 2, 3]));
