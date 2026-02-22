function checkSorted(arr) {
  for (let ind = 0; ind < arr.length - 1; ind++) {
    if (arr[ind] > arr[ind + 1]) return false;
  }
  return true;
}

console.log(checkSorted([1, 3, 2]))