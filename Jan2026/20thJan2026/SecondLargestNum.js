function secondLargestNum(arr) {
  let fistLargest = -Infinity;
  let secondLargest = -Infinity;
  for (let ele of arr) {
    if (ele > fistLargest) {
      secondLargest = fistLargest;
      fistLargest = ele;
    } else if (ele > secondLargest && ele < fistLargest) {
      secondLargest = ele;
    }
  }
  return secondLargest === -Infinity ? null : secondLargest;
}

console.log(secondLargestNum([10, 10, 20, 20, 8]))