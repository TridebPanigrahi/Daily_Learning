function twoSum(arr, target) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let result = target - arr[i];
    if (map.has(result)) {
      return [map.get(result), i];
    }
    map.set(arr[i], i);
  }
}

console.log(twoSum([2, 3, 5, 6, 4, 8], 8));
