
function largestWord(str) {
  if (!str) return "";
  // Removed punctuation and all
  const cleanString = str.replace(/[^a-zA-Z\s]/g, "");

  const word = cleanString.split(/\s+/);

  let largest = "";
  for (const ele of word) {
    if (ele.length > largest.length) {
      largest = ele;
    }
  }
  return largest;
}
