function TwoSumIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    let result = target - arr[i];
    let newIndex = arr.indexOf(result);
    if (newIndex !== -1 && i !== newIndex) {
      return [i, newIndex];
    }
  }
}

console.log(TwoSumIndex([2, 7, 11, 15], 9));
