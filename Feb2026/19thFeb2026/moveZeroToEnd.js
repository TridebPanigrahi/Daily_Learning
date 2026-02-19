function moveZeroToEnd(arr) {
  let newArr = Array.from(arr).fill(0);
  let count = 0;
  for (let char of arr) {
    if (char !== 0) {
      newArr[count] = char;
      count++;
    }
  }
  return newArr;
}
