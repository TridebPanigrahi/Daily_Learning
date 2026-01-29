console.log("start");

Promise.resolve(1).then(console.log);

setTimeout(() => console.log("Hello Macrotask"));

Promise.resolve("resolve").then(console.log);
Promise.resolve("resolve4")
  .then((ele) => {
    return new Promise((resolve) =>
      setTimeout(() => {
        return resolve(ele);
      }, 1000),
    );
  })
  .then((config) => console.log(config))
  .catch((err) => console.log(err));
Promise.reject("error")
  .then((ele) => setTimeout((hh) => console.log(hh)))
  .catch((err) => console.log(err));

setTimeout(() => {
  Promise.resolve().then(console.log);
  Promise.reject("err").then().catch(console.log);
});

setTimeout(() =>
  Promise.resolve("resolve1").then((ele) =>
    setTimeout(() => console.log(ele)),
  ),
);
console.log("end");
