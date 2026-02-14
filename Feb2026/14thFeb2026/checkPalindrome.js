function isPalindrome(str) {
  if (!str) return false;
  for (let ind = 0; ind < Math.floor(str.length / 2); ind++) {
    if (str[ind] !== str[str.length - 1 - ind]) {
      return false;
    }
  }
  return true;
}

// console.log(isPalindrome(""))