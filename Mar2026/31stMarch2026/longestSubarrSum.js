function longestSubarrSum(arr, sum) {
  let left = 0;
  let maxLength = 0;
  let newArr = [];
  let result = [];
  let sumResult = 0;
  for (let right = 0; right < arr.length; right++) {
    sumResult = sumResult + arr[right];
    while (sumResult >= sum) {
      newArr.pop();
    }
    if (sumResult <= sum) {
      result.push(arr[right]);
    }
  }
}
