function twoSum(arr, target) {
  const obj = new Map();
  for (let ind = 0; ind < arr.length; ind++) {
    obj.set(arr[ind], arr[ind]);
  }
  console.log(obj);
  for (let ele of arr) {
    let result = target - obj.get(ele);
    if (obj.has(result) && obj.get(ele) !== result) {
      return [obj.get(ele), result];
    }
  }
  return null;
}

console.log(twoSum([2, 7, 11, 15], 9));
