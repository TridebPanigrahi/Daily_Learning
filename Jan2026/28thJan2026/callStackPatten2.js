console.log("start");

Promise.resolve("Resolve1").then((ele) => setTimeout(() => console.log(ele)));

setTimeout(() => console.log("Hello Macrotask"));

Promise.resolve("resolve").then(console.log);

console.log("end");
