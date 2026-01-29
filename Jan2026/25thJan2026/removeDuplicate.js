function removeDuplicate(arr) {
  const result = [...new Set(arr)];
  return result;
}

// console.log(removeDuplicate([1,1,2,2,3,3,4]))

function removeDuplicateM2(arr) {
  let result = [arr[0]];
  for (let eleIndex = 0; eleIndex < arr.length - 1; eleIndex++) {
    if (arr[eleIndex] !== arr[eleIndex + 1]) {
      result.push(arr[eleIndex + 1]);
    }
  }
  return result;
}

// console.log(removeDuplicateM2([1,1,2,2,3,3,4]))

// Two pointer

function removeDuplicateM3(arr) {
  if (!arr.length) return 0;
  let count = 1;
  for (let startIndex = 1; startIndex < arr.length; startIndex++) {
    if (arr[startIndex] !== arr[startIndex - 1]) {
      count++;
    }
  }
  return count;
}

console.log(removeDuplicateM3([1, 1, 2, 2, 3, 3, 4]));
