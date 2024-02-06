/*
//Event bubbling :-

const div = document.querySelector("div");
const body = document.querySelector("body");

body.addEventListener("click", function () {
  console.log("body");
});
div.addEventListener("click", function () {
  console.log("div");
});
 // called to child to parent in event bubbling

*/

// ----------------------------------------------------------

/*
// Event Capturing :-

const div = document.querySelector("div");
const body = document.querySelector("body");
const button = document.querySelector("button");

body.addEventListener("click", function () {
  console.log("body");
}, true);
div.addEventListener("click", function () {
  console.log("div");
}, true);
button.addEventListener("click", function () {
  console.log("button");
}, true);
// called to   parent to child in event Capturing
*/

// ------------------------------------------------------------------

/*
// Event StopPropagation :-

const div = document.querySelector("div");
const body = document.querySelector("body");
const button = document.querySelector("button");

body.addEventListener("click", function () {
  console.log("body");
});
div.addEventListener("click", function () {
  console.log("div");
});
button.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("button");
});
*/

// ------------------------------------------------------------------------
/*
// Event ImmediatePropagation :-

const button = document.querySelector("button");

button.addEventListener("click", function (event) {
  console.log("button");
});

button.addEventListener("click", function (event) {
  event.stopImmediatePropagation();
  console.log("button1");
});
button.addEventListener("click", function (event) {
  console.log("button2");
});
*/

// --------------------------------------------------------------------

// Event prevent Default :-

const a = document.querySelector("a");

a.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Ancher");
});
