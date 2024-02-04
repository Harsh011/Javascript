/*
console.log("start");
const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
});

promise1.then((res) => {
  console.log(res);
});
console.log("end");

// start;
// 1;
// end;
// 2;
*/

// ---------------------------------------------

/*
console.log("start");
const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
  console.log(3);
});

promise1.then((res) => {
  console.log(res);
});
console.log("end");

// start
// 1 
// 3 
// end 
// 2

*/

// ----------------------------------------------
/*
console.log("start");
const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  console.log(3);
});

promise1.then((res) => {
  console.log("Resolve", res);
});
console.log("end");

// start 
// 1 
// 3
// end
*/

// --------------------------------------------------------

/*
console.log("start");

const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });
console.log("Middle");

fn().then((res) => {
  console.log(res);
});
console.log("end");

// start 
// middle 
// 1
// end 
// sucess
*/

// --------------------------------------------------------

/*
function job() {
  return new Promise(function (resolve, reject) {
    reject();
  });
}

let promise = job();

promise
  .then(function () {
    console.log("sunccess 1");
  })
  .then(function () {
    console.log("sunccess 2");
  })
  .then(function () {
    console.log("sunccess 3");
  })
  .then(function () {
    console.log("sunccess 4");
  })
  .then(function () {
    console.log("sunccess 5");
  })
  .catch(function () {
    console.log("Error");
  })
  .then(function () {
    console.log("success 6"); 
  });
*/

// -------------------------------------------------------

/*
function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

let promise = job(true);

promise
  .then(function (data) {
    console.log(data); // successs

    return job(false);
  })
  .catch(function (error) {
    console.log(error); //errror

    return "Errror caught";
  })
  .then(function (data) {
    console.log(data); //error caught

    return job(true);
  })
  .catch(function (error) {
    console.log(error);
  });
  */

//   ------------------------------------------------------

/*
function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

let promise = job(true); //resolve(success)

promise
  .then(function (data) {
    console.log(data); // success
    return job(true);
  })
  .then(function (data) {
    if (data !== "victory") {
      throw "Defect";
    }

    return job(true);
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error); // defect

    return job(false);
  })
  .then(function (data) {
    console.log(data);

    return job(true);
  })
  .catch(function (error) {
    console.log(error); // error

    return "Errror caught";
  })
  .then(function (data) {
    console.log(data); //Error Caught
    return new Error("test");
  })
  .then(function (data) {
    console.log("Success", data.message); //success test
  })
  .catch(function (data) {
    console.log("Error", data.message);
  });
*/

// ---------------------------------------------------

/*
// promise chaining :-
const firstPromise = new Promise((resolve, reject) => {
  resolve("First");
});

const secondPromise = new Promise((resolve, reject) => {
  resolve(firstPromise);
});

secondPromise
  .then((res) => {
    return res;
  })
  .then((res) => console.log(res));
  */

// ---------------------------------------------

/*
// wirite this example code using async/await instead of .then/catch
// function loadJson(url) {
//   return fetch(url).then((res) => {
//     if (res.status === 200) {
//       return res.json();
//     } else {
//       throw new Error(res.status);
//     }
//   });
// }

// loadJson("https://fakeurl.com/no-such-user.json").catch((err) => {
//   console.log(err);
// });

async function loadJson(url) {
  let res = await fetch(url);

  if (res.status === 200) {
    let data = await res.json();

    return data;
  }

  throw new Error(res.status);
}

loadJson("https://fakeurl.com/no-such-user.json").catch((err) => {
  console.log(err);
});
*/

// ---------------------------------------------

// Recuresion :-
function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`subscribe to ${username}`);
    }, 1000);
  });
}

function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Like the ${video} video`);
    }, 2000);
  });
}
function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`share the ${video} video`);
    }, 3000);
  });
}

function recuresionPromise(funcPromise) {
  if (funcPromise.length === 0) return;

  const currPromise = funcPromise.shift();

  currPromise.then((res) => console.log(res)).catch((err) => console.log(err));

  recuresionPromise(funcPromise);
}

recuresionPromise([
  importantAction("Harsh"),
  likeTheVideo("Javasctipt interview Question"),
  shareTheVideo("Share the Javascript interview Question"),
]);
