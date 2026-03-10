function removeSpecificEle(arr, ele) {
  const result = arr.filter((elem) => elem !== ele);
  return result;
}

console.log(removeSpecificEle([1, 2, 3, 4, 2], 2));
