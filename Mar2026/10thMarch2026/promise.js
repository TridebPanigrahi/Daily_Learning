function myPromise(arr) {
  const result = Promise.all(arr.map((ele) => ele.then(console.log)));
  return result;
}

myPromise([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]);
