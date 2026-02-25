function reverseArr(arr) {
  let result = [];
  arr.forEach((ele) => {
    result.unshift(ele);
  });
  return result
}

console.log(reverseArr([1, 2, 3, 4]))
