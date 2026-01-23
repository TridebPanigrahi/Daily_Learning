console.log("Start");

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved Promises");
  }, 0);
});

setTimeout(() => {
  console.log("macro Taskqueue");
}, 0);

promise.then((result) => {
  console.log(result);
});

console.log("End");

//Guessing op is
//Start
//End
//Macro Taskqueue
//Resolved Promises
