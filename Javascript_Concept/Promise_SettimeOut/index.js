const promise = new Promise((resolve, reject) => {
  console.log("Promise created");
  resolve("Promise Resolved");
});

promise.then((result) => {
  console.log(result);
});

setTimeout(() => {
  console.log("setTimeout callback executed");
}, 2000);

console.log("Code after settimeout and promise creation");
