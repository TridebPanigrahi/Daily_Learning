function removeFalsy(arr) {
  const result = arr.filter((ele) => ele);
  return result;
}

console.log(removeFalsy([0, "hello", false, 5, "", null, NaN]));
