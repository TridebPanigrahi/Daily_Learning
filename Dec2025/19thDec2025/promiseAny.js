let p1 = new Promise((resolve, reject) => {
  resolve("Resolved P1");
});

let p2 = new Promise((resolve, reject) => {
  resolve("Resolved P2");
});

let p3 = new Promise((resolve, reject) => {
  resolve("Resolved P3");
});

let p4 = new Promise((resolve, reject) => {
  reject("rejected p4");
});
let p5 = new Promise((resolve, reject) => {
  reject("rejected p4");
});

// Promise.any([p4, p3, p2, p1])
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

Promise.any([p4, p5])
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
