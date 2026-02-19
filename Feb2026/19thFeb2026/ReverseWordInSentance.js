function reverseWord(str) {
  if (!str) return "";
  const replacedStr = str.replace(/[^a-zA-Z\s]/, "");
  const splitedStr = replacedStr.split(/\s+/);
  const storedArr = [];
  for (let ele of splitedStr) {
    let result = "";
    for (let char of ele) {
      result = char + result;
    }
    storedArr.push(result);
  }
  return storedArr.join(" ");
}

console.log(reverseWord("hello world"))