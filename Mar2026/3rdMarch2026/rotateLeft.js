function rotateLeft(arr, l) {
  let k = l % arr.length;
  const newArr = Array.from(arr).fill(null);
  for (let i = 0; i < arr.length; i++) {
    let nextK = i - k;
    if (nextK < 0) {
      let leftInd = arr.length + nextK;
      newArr[leftInd] = arr[i];
    } else {
      newArr[nextK] = arr[i];
    }
  }
  return newArr
}

console.log(rotateLeft([1, 2, 3, 4, 5], 11));
