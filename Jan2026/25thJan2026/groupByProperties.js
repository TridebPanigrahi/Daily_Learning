function groupBy(arr, prop) {
  let obj = {};
  for (let ele of arr) {
    if (!obj[ele[prop]]) {
      obj[ele[prop]] = [];
    }
    obj[ele[prop]].push(ele);
  }
  return obj;
}
console.log(
  groupBy(
    [
      { name: "Alice", dept: "IT" },
      { name: "Bob", dept: "HR" },
      { name: "Charlie", dept: "IT" },
    ],
    "dept",
  ),
);
