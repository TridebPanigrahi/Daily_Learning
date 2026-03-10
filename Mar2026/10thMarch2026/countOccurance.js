function countOccurance(arr, value) {
  const result = arr.reduce((acc, curV) => {
    if (curV === value) {
      acc += 1;
    }
    return acc;
  }, 0);
  return result
}

console.log(countOccurance([1,2,3,2,4,2], 2))
