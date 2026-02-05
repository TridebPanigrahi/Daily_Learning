function longestPalindrome(s) {
  if (s.length < 2) return s;

  let start = 0;
  let maxLen = 1;

  function expand(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const len = right - left + 1;
      if (len > maxLen) {
        maxLen = len;
        start = left;
      }
      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    // odd length palindromes
    expand(i, i);

    // even length palindromes
    expand(i, i + 1);
  }

  return s.slice(start, start + maxLen);
}


console.log(longestPalindrome("abbcbbsaas"))