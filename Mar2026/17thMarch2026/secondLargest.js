function secondLargest(arr) {
  let firstLr = -Infinity;
  let secondLr = -Infinity;
  for (const ele of arr) {
    if (ele > firstLr) {
      secondLr = firstLr;
      firstLr = ele;
    } else if (ele > secondLr && ele < firstLr) {
      secondLr = ele;
    }
  }
  return secondLr !== -Infinity ? secondLr : null;
}

console.log(secondLargest([1, 3, 4, 2, 3, 5, 2, 1, 4, 5, 6]));
