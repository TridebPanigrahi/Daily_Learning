function checkAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  // storing all charecter in one empty frequency

  const freq = {};
  for (let char of str1) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let char of str2) {
    if (!freq[char]) return false;
    freq[char]--;
  }
  return true;
}

console.log(checkAnagram("aab", "aba"))