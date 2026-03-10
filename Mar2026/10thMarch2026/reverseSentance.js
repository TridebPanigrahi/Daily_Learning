function reverseSentance(str) {
  let result = "";
  const replacedStr = str.replace(/[^a-zA-Z\s]/g, "");
  const splittedStr = replacedStr.split(/\s+/);
  for (const ele of splittedStr) {
    result = ele +" "+ result;
  }
  return result;
}

console.log(reverseSentance("I love javascript"))