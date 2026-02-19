function maximumOccuring(str) {
  if (!str) return "";
  const replacedStr = str.replace(/[^a-zA-Z]/, "");
  const lowerCaseStr = replacedStr.toLowerCase();
  const map = new Map();
  let maxCharCount = 0
  let chart = ""
  for (let char of lowerCaseStr) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for(let char of lowerCaseStr){
    if(map.get(char) > maxCharCount){
        maxCharCount = map.get(char)
        chart = char
    }
  }
  return chart
}

console.log(maximumOccuring("javascript"))