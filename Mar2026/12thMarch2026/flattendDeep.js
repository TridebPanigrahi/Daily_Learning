function flatenedDeep(arr) {
  let result = [];
  function extractArr(arr) {
    for (let ele of arr) {
      if (Array.isArray(ele)) {
        extractArr(ele);
      } else {
        result.push(ele);
      }
    }
  }
  extractArr(arr);
  return result;
}

console.log(flatenedDeep([1, [2, [3, [4]], 5]]));
