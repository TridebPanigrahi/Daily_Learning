console.log("start");

setTimeout(() => console.log("Hello Macrotask"));

Promise.resolve("resolve").then(console.log);


console.log("end");
