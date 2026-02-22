function countVowel(str) {
  let vowel = new Set(["a", "e", "i", "o", "u"]);
  const newStr = str.replace(/[^a-zA-Z\s]/).toLowerCase();
  let count = 0;
  for (let char of newStr) {
    if (vowel.has(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowel("hello world"));
