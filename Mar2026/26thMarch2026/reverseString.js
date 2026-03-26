function reverseString(str) {
  let result = "";
  for (let ele of str) {
    result = ele + result;
  }
  return result;
}

console.log(reverseString("hello"));
