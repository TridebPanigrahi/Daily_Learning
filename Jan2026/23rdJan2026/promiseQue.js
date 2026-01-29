// Write a function that:
// Executes them one after another (not in parallel)
// Collects their resolved values into an array
// Stops execution if any promise rejects

// [
//   () => Promise.resolve(1),
//   () => Promise.resolve(2),
//   () => Promise.resolve(3)
// ]

async function PromiseQue(arr) {
  let empArr = [];
  try {
    for (let prom of arr) {
      let resolvedP = await prom();
      empArr.push(resolvedP);
    }
    return empArr;
  } catch (err) {
    throw err;
  }
}

// PromiseQue([
//   () => Promise.resolve(1),
//   () => Promise.resolve(2),
//   () => Promise.resolve(3),
// ])
//   .then(console.log)
//   .catch(console.error);

PromiseQue([
  () => Promise.resolve(1),
  () => Promise.reject("Error at 2"),
  () => Promise.resolve(3),
])
.then(console.log)
.catch(console.error);
