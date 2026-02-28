function groupBy(arr, key) {
  let obj = {};
  for (let ele of arr) {
    if (!obj[ele[key]]) {
      obj[ele[key]] = [];
    }
    obj[ele[key]].push(ele);
  }
  return obj;
}

console.log(groupBy([{ age: 20 }, { age: 30 }, { age: 20 }], "age"));
