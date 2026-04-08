function frequency(arr, k) {
  let obj = {};
  for (let ele of arr) {
    obj[ele] = (obj[ele] || 0) + 1;
  }
  const sortedObj = Object.fromEntries(
    Object.entries(obj)
      .sort((a, b) => b[1] - a[1])
      .slice(0, k),
  );
  return Object.keys(sortedObj);
}

console.log(frequency([1, 1, 1, 2, 3, 4, 5, 5], 2));
