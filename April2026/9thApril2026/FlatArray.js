let result = [];
function flatArray(arr) {
  for (let ele of arr) {
    if (Array.isArray(ele)) {
      flatArray(ele);
    } else {
      result.push(ele);
    }
  }
  return result;
}

console.log(flatArray([2, 3, 4, [5, 6], [7, 8]]));
