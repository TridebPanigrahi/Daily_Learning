function productOfarr(arr) {
  let result = Array.from(arr).fill(1);
  let leftOne = 1;
  for (let i = 0; i < arr.length; i++) {
    result[i] = result[i] * leftOne;
    // leftOne++;
  }

  let rightOne = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    result[i] = result[i] * rightOne;
    // rightOne++;
  }
  return result;
}

console.log(productOfarr([2, 4, 6, 8]));
