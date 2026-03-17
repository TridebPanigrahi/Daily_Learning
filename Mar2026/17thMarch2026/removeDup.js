function removeDuplicate(arr) {
  let map = new Map();
  for (const ele of arr) {
    if (!map.has(ele)) {
      map.set(ele);
    }
  }
  return map.keys()
}

console.log(removeDuplicate([1,2,3,1,1,3,45,6]))