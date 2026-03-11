function flatened(arr) {
  let Earr = [];
  function addArray(arr) {
    for (let ele of arr) {
      if (Array.isArray(ele)) {
        addArray(ele);
      } else {
        Earr.push(ele);
      }
    }
  }
  addArray(arr);
  return Earr;
}
console.log(flatened([1, [2, [3, [4]], 5]]));
