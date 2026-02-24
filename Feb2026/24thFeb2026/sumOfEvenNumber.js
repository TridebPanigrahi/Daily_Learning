function evenSum(arr) {
  const result = arr.reduce((acc, cur) => {
    if (cur % 2 == 0) {
      acc = acc + cur;
    }
    return acc;
  }, 0);
  return result;
}

console.log(evenSum([1, 2, 3, 4, 5, 6]));
