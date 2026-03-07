function once(fn) {
  let count = 0;
  return function () {
    count++;
    if (count === 1) {
      fn();
    }
  };
}

let onceFunction = once(() => console.log("executed Once"));

onceFunction();
onceFunction();
onceFunction();
onceFunction();

// console.log(onceFunction());
// console.log(onceFunction());
// console.log(onceFunction());
