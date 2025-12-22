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

Promise.all([p1, p2, p3, p4])
  .then(([r1, r2, r3, r4]) => console.log(r1, r2, r3, r4))
  .catch((err) => console.log(err));
