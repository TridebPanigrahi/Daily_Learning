function findMin(arr) {
  let result = Infinity;
  for (const ele of arr) {
    if (ele < result) {
      result = ele;
    }
  }
  return result;
}

console.log(findMin([8, 3, 5, 1, 9]));
