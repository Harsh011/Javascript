/*
//Async vs sync
console.log("start");

const requiredMessage = (username) => {
  setTimeout(() => {
    return `subscriber to ${username}`;
  }, 1000);
};
const message = requiredMessage("Harsh");
console.log(message);
console.log("end");
*/

/*
// callback
console.log("Start");

const CallbackRequired = (username, cd) => {
  setTimeout(() => {
    cd(`subscriber to ${username}`);
  }, 1000);
};

const msg = CallbackRequired("Harsh", function (msg1) {
  console.log(msg1);
});
console.log("End");
*/

//Promises
/*
console.log("Start");

const sub = new Promise((resolve, reject) => {
  setTimeout(() => {
    // const result = true;
    const result = false;
    if (result) resolve("Hey Hi Harsh I am resolve the Promise");
    else reject("I am not resolve the promise");
  }, 2000);
});

// console.log(sub);
sub
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
console.log("End");
*/

// ----------------------------------------------------------

/*
console.log("Start");

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
    }, 1000);
  });
}
function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`share the ${video} video`);
    }, 1000);
  });
}

importantAction("Harsh")
  .then((res) => {
    console.log(res);
    return likeTheVideo("Javasctipt interview Question");
  })
  .then((res) => {
    console.log(res);
    return shareTheVideo("Share the Javascript interview Question");
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("End");
*/

// ----------------------------------------------------

//promises combinator :-

/*
//Promise.all :-
console.log("Start");

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
    }, 1000);
  });
}
function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`share the ${video} video`);
    }, 1000);
  });
}

Promise.all([
  importantAction("Harsh"),
  likeTheVideo("Javasctipt interview Question"),
  shareTheVideo("Share the Javascript interview Question"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("End");
*/

// --------------------------------------------------

/*
//promise.race :-
console.log("Start");

function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`subscribe to ${username}`);
    }, 2000);
  });
}

function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Like the ${video} video`);
    }, 500);
  });
}
function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`share the ${video} video`);
    }, 1000);
  });
}

Promise.race([
  importantAction("Harsh"),
  likeTheVideo("Javasctipt interview Question"),
  shareTheVideo("Share the Javascript interview Question"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("End");
*/

// ----------------------------------------------

/*
//prmose.allsettled :-
console.log("Start");

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
      reject(`this ${video} video is falled`);
    }, 1000);
  });
}
function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`share the ${video} video`);
    }, 1000);
  });
}

Promise.allSettled([
  importantAction("Harsh"),
  likeTheVideo("Javasctipt interview Question"),
  shareTheVideo("Share the Javascript interview Question"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("End");
*/

// ---------------------------------------------------------

/*
//promise.any :-
console.log("Start");

function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    //   reject(`subscribe to ${username}`);
      resolve(`subscribe to ${username}`);
    }, 500);
  });
}

function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Like the ${video} video`);
    }, 1000);
  });
}
function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`share the ${video} video`);
    }, 1000);
  });
}

Promise.any([
  importantAction("Harsh"),
  likeTheVideo("Javasctipt interview Question"),
  shareTheVideo("Share the Javascript interview Question"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("End");
*/

// async/await :-

console.log("Start");

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

const result = async () => {
  try {
    const msg1 = await importantAction("Harsh");
    const msg2 = await likeTheVideo("Javasctipt interview Question");
    const msg3 = await shareTheVideo("Share the Javascript interview Question");
    console.log({ msg1, msg2, msg3 });
  } catch (error) {
    console.log("Errror from", error);
  }
};

result();
console.log("End");
