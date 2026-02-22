function longestWord(str) {
  const newStr = str.replace(/[^a-zA-Z\s]/);
  const strArr = newStr.split(/\s+/);
  let result = "";
  for (let word of strArr) {
    if (word.length > result.length) {
      result = word;
    }
  }
  return result;
}

console.log(longestWord("I love javascript programming"));
