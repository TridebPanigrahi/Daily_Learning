function subArraySumByK(arr, k) {
  let map = new Map();
  let left = -1;
  let right = -1;
  let maxLength = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (sum === k) {
      left = 0;
      right = i;
      maxLength = i + 1;
    }
    if (map.has(sum - k)) {
      let length = i - map.get(sum - k);
      let prifix = map.get(sum - k);
      if (maxLength > length) {
        left = prifix + 1;
        right = i;
        maxLength = length;
      }
    }
    if (!map.has(sum - k)) {
      map.set(i, sum);
    }
  }
}

console.log(subArraySumByK([1, 2, 3, 4, -1, -3, -4, 4, 3, 5], 0));
