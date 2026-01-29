function countFrequency(arr) {
  let obj = {};
  for (let ele of arr) {
    obj[ele] = (obj[ele] || 0) + 1;
  }
  return obj
}

console.log(countFrequency(["apple", "banana", "apple", "orange", "banana", "apple"]))
