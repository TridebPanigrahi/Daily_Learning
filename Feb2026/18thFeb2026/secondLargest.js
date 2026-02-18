function secondLargest(arr) {
  if (arr.length === 1 || !arr) return null;

  let firstLr = -Infinity;
  let secondLr = -Infinity;
  for (let ele of arr) {
    if (ele > firstLr) {
      secondLr = firstLr;
      firstLr = ele;
    } else if (ele > secondLr && ele < firstLr) {
      secondLr = ele;
    }
  }
  return secondLr === -Infinity ? null : secondLr;
}

console.log(secondLargest([10, 5, 20, 8]))