function countFrequency(str) {
  let obj = {};
  for (let ele of str) {
    obj[ele] = (obj[ele] || 0) + 1;
  }
  return obj;
}

console.log(countFrequency("hello"));
