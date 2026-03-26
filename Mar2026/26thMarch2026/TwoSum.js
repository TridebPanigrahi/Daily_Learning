function twoSum(arr, target) {
  let obj = new Map();
  for (let i = 0; i < arr.length; i++) {
    let result = target - arr[i];
    if (obj.has(result)) {
      return [obj.get(result), i];
    }
    obj.set(arr[i], i);
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
