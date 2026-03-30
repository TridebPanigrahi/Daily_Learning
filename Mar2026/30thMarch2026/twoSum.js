function twoSum(arr, target) {
  let map = new Map();
  for (let ind = 0; ind < arr.length; ind++) {
    let res = target - arr[ind];
    if (map.has(res)) {
      return [map.get(res), ind];
    }
    map.set(arr[ind], ind);
  }
}

console.log(twoSum([2,7,11,15], 9))