function chunkArr(arr, size) {
  const result = [];
  let newArr = [];
  for (let ele of arr) {
    if (newArr.length !== size) {
      newArr.push(ele);
    }
    if (newArr.length === size) {
      result.push([...newArr]);
      newArr = [];
    }
  }
  return result;
}

console.log(chunkArr([1, 2, 3, 4, 5, 6], 2));
