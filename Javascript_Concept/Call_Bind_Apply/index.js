/*

// Call methods :- 

function sayHello() {
  console.log(`Hello , ${this.name}`);
}

const person = { name: "Harsh" };

sayHello.call(person);

*/
// ---------------------------------------------------------------------------
/*

// Call methods :-

function introduce(greeting, punctuation) {
  console.log(`${greeting},${this.name}${punctuation}`);
}

const person2 = { name: "Alice" };
introduce.apply(person2, ["hi", "!"]);

*/
// ------------------------------------------------------------------------------------

/*

bind methods : -

function greet() {
  console.log(`Greetings, ${this.name}`);
}

const person3 = { name: "Bob" };

const greatPerson = greet.bind(person3);
greatPerson();

*/
