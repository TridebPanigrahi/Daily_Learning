async function myPromiseAll(promises) {
  const result = await Promise.all(promises.map((ele) => ele));
  return result;
}

myPromiseAll([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
  Promise.resolve(4),
  Promise.resolve(5),
]).then(console.log);
