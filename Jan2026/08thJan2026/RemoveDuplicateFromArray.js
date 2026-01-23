//Input:  [1, 2, 2, 3, 4, 4]
//Output: [1, 2, 3, 4]
/*
//method 1

function removeDuplicate(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(removeDuplicate([1, 2, 2, 3, 4, 4]))

*/

//method 2
function removeDuplicate(arr) {
  let result = [];
  let newArr = new Set(arr);
  for (let char of newArr) {
    result.push(char);
  }
  return result;
}

console.log(removeDuplicate([1, 2, 2, 3, 4, 4]));
