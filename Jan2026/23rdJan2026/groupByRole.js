// [
//   { name: "Alice", role: "admin" },
//   { name: "Bob", role: "user" },
//   { name: "Charlie", role: "admin" }
// ]

function groupBy(arr, key) {
  let result = {};
  for (let ele of arr) {
    let value = ele[key];
    if (!result[value]) {
      result[value] = [];
    }
    result[value].push(ele);
  }
  return result;
}

console.log(
  groupBy(
    [
      { name: "Alice", role: "admin" },
      { name: "Bob", role: "user" },
      { name: "Charlie", role: "admin" },
    ],
    "role",
  ),
);
