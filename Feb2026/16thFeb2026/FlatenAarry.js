const result = [];
function nestedArr(Flatarr) {
  for (let ele of Flatarr) {
    if (Array.isArray(ele)) {
      nestedArr(ele);
    } else {
      result.push(ele);
    }
  }
  return result;
}
console.log(nestedArr([1, [2, [3, 4], 5]]));
