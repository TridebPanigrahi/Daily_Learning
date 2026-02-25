function largestNumber(arr) {
  let largest = -Infinity;
  arr.forEach((ele) => {
    if (ele > largest) {
      largest = ele;
    }
  });
  return largest
}

console.log(largestNumber([10, 5, 20, 8]))