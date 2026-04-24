function nextGreaterElement(arr) {
  let result = Array.from(arr.length).fill(-1);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        result[i] = arr[j];
        break;
      }
    }
  }
  return result
}

console.log(nextGreaterElement([1,3,1,3,4,4,4,5,32,1,-1]))
