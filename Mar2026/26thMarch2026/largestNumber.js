function largestNum(arr) {
  let result = -Infinity;
  for (const ele of arr) {
    if (ele > result) {
      result = ele;
    }
  }
  return result;
}
