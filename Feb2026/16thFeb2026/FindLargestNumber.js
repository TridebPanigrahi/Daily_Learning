function findLargestNumber(arr) {
  if (arr.length === 0 || !arr) return null;
  if (arr.length === 1) return arr[0];
  let result = arr[0];
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > result) result = arr[i];
  }
  return result;
}

console.log(findLargestNumber([10, 5, 20, 8]));
