function longestWordFinder(str) {
  let result = "";
  if (!str) return result;
  const newStr = str.replace(/[^a-zA-Z\s]/g, "");
  const convertedStr = newStr.split(/\s+/);
  for (let char of convertedStr) {
    if (char.length > result.length) {
      result = char;
    }
  }
  return result;
}

console.log(longestWordFinder("JavaScript is extremely powerful!"));
