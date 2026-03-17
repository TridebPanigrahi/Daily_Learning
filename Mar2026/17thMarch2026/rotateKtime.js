function rorateKtimes(arr, k) {
  let newK = k % arr.length;
  const newArr = Array.from(arr).fill(0);
  for (let ind = 0; ind < arr.length; ind++) {
    let newInd = ind + newK;
    if (newInd < arr.length) {
      newArr[newInd] = arr[ind];
    } else {
      newArr[newInd - arr.length] = arr[ind];
    }
  }
  return newArr;
}

console.log(rorateKtimes([1, 2, 3, 4, 5], 9));
