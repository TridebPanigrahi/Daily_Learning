function secondSmallest(arr) {
  let firstSmall = Infinity;
  let secondSmall = Infinity;
  arr.forEach((ele) => {
    if (ele < firstSmall) {
      secondSmall = firstSmall;
      firstSmall = ele;
    } else if (ele > firstSmall && ele < secondSmall) {
      secondSmall = ele;
    }
  });
  return secondSmall;
}

console.log(secondSmallest([5, 3, 8, 1, 2]));
