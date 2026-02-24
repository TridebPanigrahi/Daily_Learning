function arrayToObject(arr) {
  const obj = {};
  for (let ele of arr) {
    const { key, value } = ele;
    obj[key] = value;
  }
  return obj;
}

console.log(
  arrayToObject([
    { key: "name", value: "John" },
    { key: "age", value: 25 },
  ]),
);
