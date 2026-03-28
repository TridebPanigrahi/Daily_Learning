function productOfarr(arr) {
  let result = new Array(arr.length).fill(1);
  let leftOne = 1;
  for (let i = 0; i < arr.length; i++) {
    result[i] = leftOne;
    leftOne *= arr[i];
  }

  let rightOne = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    result[i] *= rightOne;
    rightOne *= arr[i];
  }

  return result;
}

console.log(productOfarr([2, 4, 6, 8]));
