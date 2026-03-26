function countVowel(str) {
  const vowel = { a: "a", e: "e", i: "i", o: "o", u: "u" };
  const newStr = str.replace(/[^a-zA-z\s]/g, "").toLowerCase();
  let count = 0;
  for (const ele of newStr) {
    if (vowel[ele]) {
      count++;
    }
  }
  return count;
}

console.log(countVowel("hello"));
