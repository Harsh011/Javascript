// Map :-

const number = [1, 2, 3, 4, 5];

const squareNumber = number.map((num) => num * num);

console.log(squareNumber);

// filter :

const number1 = [1, 2, 3, 4, 5];

const eventNumber = number1.filter((item) => item % 2 === 0);

console.log(eventNumber);

// reduce :_

const number2 = [1, 2, 3, 4, 5];

const sum = number2.reduce((prev, curr) => prev + curr);

console.log(sum);
