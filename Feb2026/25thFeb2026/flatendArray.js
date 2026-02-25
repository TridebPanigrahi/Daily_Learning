let result = [];
function flatend(arr) {
  for (let ele of arr) {
    if (Array.isArray(ele)) {
      flatend(ele);
    } else {
      result.push(ele);
    }
  }
  return result;
}

console.log(flatend([1, [2, [3, 4], 5]]));
