function twoSum(arr, target) {
  for (let ind = 0; ind < arr.length; ind++) {
    let findingResult = target - arr[ind];
    let right = ind + 1;
    while (right < arr.length) {
      if (findingResult === arr[right]) {
        break;
      } else {
        right++;
      }
    }
    if (arr[ind] + arr[right] === target) {
      return [arr[ind], arr[right]];
    }
  }
}

// console.log(twoSum([15, 7, 1, 8], 9));
