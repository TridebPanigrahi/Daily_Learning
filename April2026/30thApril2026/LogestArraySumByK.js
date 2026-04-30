function longestArr(arr, target) {
  let map = new Map();
  let start = -1;
  let end = -1;
  let maxLength = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (sum === target) {
      start = 0;
      end = i;
      maxLength = i + 1;
    } else if (map(sum - target)) {
      let length = i - map.get(sum - target);
      let prefix = map.get(sum - target);
      if (length > maxLength) {
        maxLength = length;
        start = prefix + 1;
        end = i;
      }
    }
    if (!map.get(sum)) {
      map.set(sum, i);
    }
  }
}
