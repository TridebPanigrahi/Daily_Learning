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

const raceResult = await Promise.race([p4, p2, p3, p1]).catch((err) => err);

console.log(raceResult);
