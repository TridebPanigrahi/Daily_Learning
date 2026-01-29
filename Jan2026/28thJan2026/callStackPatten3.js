console.log("start");

Promise.resolve(1).then(console.log);

setTimeout(() => console.log("Hello Macrotask"));

Promise.resolve("resolve").then(console.log);

Promise.reject("error")
  .then((ele) => setTimeout((hh) => console.log(hh)))
  .catch((err) => console.log(err));

setTimeout(() =>
  Promise.resolve("resolve1").then((ele) => setTimeout(() => console.log(ele))),
);
console.log("end");
