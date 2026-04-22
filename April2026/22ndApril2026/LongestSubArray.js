function longestSubarr(arr, sumVal) {
  let map = new Map();
  let sum = 0;
  let left = -1;
  let right = -1;
  let maxLength = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (sum === sumVal) {
      if (i + 1 > maxLength) {
        maxLength = i + 1;
        left = 0;
        right = i;
      }
    }
    if (map.get(sum - sumVal)) {
      let length = i - map.get(sum - sumVal);
      let prefix = map.get(sum - sumVal);
      if (length > maxLength) {
        maxLength = length;
        left = prefix + 1;
        right = i;
      }
    }
    if (!map.get(sum)) {
      map.set(sum, i);
    }
  }
  return (maxLength = 0 ? [] : arr.slice(left, right + 1));
}

console.log(longestSubarr([1, 2, 3, 4, 5, 5, -1, 3, 4, 5, 6, 1, 2], 9));
