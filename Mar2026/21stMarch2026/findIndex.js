function findIndex(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) start = mid + 1;
    else {
      end = mid - 1;
    }
  }
}

console.log(findIndex([2, 4, 6, 7, 8], 4));
