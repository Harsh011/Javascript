function curryAdd(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}

const curriedAdd = curryAdd(1)(2)(3);
console.log(curriedAdd);
