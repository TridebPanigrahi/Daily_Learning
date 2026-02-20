function interSection(arr1, arr2) {
  const newArr1 = [...new Set(arr1)];
  const newArr2 = [...new Set(arr2)];
  let obj = {};
  const result = [...newArr1, ...newArr2].filter((ele) => {
    obj[ele] = (obj[ele] || 0) + 1;
    return obj[ele] >= 2;
  });
  return result;
}

console.log(interSection([1, 2, 3], [2, 3, 4]));
