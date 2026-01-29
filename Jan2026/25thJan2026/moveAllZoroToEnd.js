function moveAllZeroEnd(arr) {
  if (!arr) return null;
  let convertedInd = 0;
  for (let ind = 0; ind < arr.length - 1; ind++) {
    if (arr[ind] === 0 && arr[ind + 1] !== 0) {
      arr[convertedInd] = arr[ind + 1];
      arr[ind + 1] = 0;
      convertedInd++;
    }else if(arr[ind] !==0){
        convertedInd ++
    }
  }
  return arr;
}

console.log(moveAllZeroEnd([0, 0, 0, 3, 12]));
