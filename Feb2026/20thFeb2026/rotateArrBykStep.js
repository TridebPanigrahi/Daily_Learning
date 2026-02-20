function rotateArr(arr, k) {
  let newK = k;
  if (k > arr.length) {
    newK = k % arr.length;
  }
  const emptyArr = Array.from(arr).fill(null);
  for (let i = 0; i < arr.length; i++) {
    let index = i + newK;
    if (index < arr.length) {
      emptyArr[index] = arr[i];
    } else {
      const newIndex = index - arr.length;
      emptyArr[newIndex] = arr[i];
    }
  }
  return emptyArr;
}

console.log(rotateArr([1, 2, 3, 4, 5], 10));
