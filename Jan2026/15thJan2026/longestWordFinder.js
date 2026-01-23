function longestWord(str) {
  let result = "";
  const newStr = str.replace(/[^a-zA-Z\s]/g, "");
  //   console.log(newStr)
  const splitedStr = newStr.split(/\s+/);
  for (let ele of splitedStr) {
    if (ele.length > result.length) {
      result = ele;
    }
  }
  return result;
}

console.log(longestWord("JavaScript is extremely powerful!"));
