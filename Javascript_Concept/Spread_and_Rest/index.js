//Rest Operator :-

function sum(...numbers) {
  return numbers.reduce((prev, curr) => prev + curr);
}

console.log(sum(1, 2, 3, 4, 5, 6));

// Spread Operator

//Array :-
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(arr2);

// Object :-
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };

console.log(obj2);
