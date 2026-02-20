function firstDuplicate(arr) {
  const map = new Map();
  const result = arr.find((ele) => {
    map.set(ele, (map.get(ele) || 0) + 1);
    return map.get(ele) > 1;
  });
  return result;
}

console.log(firstDuplicate([1, 2, 3, 4, 2, 5]));
