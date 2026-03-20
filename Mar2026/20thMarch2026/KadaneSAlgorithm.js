function KadaneAlgo(arr) {
  let currentNum = arr[0];
  let maxSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    currentNum = Math.max(arr[i], currentNum + arr[i]);
    maxSum = Math.max(maxSum, currentNum);
  }
  return maxSum;
}
console.log(KadaneAlgo([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
