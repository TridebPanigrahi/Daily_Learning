function frequency(str) {
  let obj = {};
  for (let ele of str) {
    obj[str] += obj[str] || 0 + 1;
  }
  return obj;
}

console.log(frequency("hello"));
