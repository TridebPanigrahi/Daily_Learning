function longestWordFinder(str) {
  let result = "";
  if (!str) return "";
  const newStr = str.replace(/[^a-zA-Z\s]/g, "");
  const convertedStr = newStr.split(/\s+/);
  for (let ele of convertedStr) {
    if (ele.length > result.length) {
      result = ele;
    }
  }
  return result;
}
