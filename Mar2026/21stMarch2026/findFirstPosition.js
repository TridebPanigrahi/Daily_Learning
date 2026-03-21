function firstOccurrence(arr, target) {
  let start = 0, end = arr.length - 1;
  let ans = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      ans = mid;
      end = mid - 1;   // move left
    } 
    else if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return ans;
}

console.log(firstOccurrence([1,2,2,2,4,5,2,3,4,2], 2))