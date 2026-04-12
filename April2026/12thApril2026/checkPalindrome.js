// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

var isPalindrome = function (s) {
  const newStr = s.replace(/[^a-z0-9A-Z\s]/g, "").toLowerCase();
  const splitedStr = newStr.split(/\s+/).join("");
  for (let ind = 0; ind < splitedStr.length / 2; ind++) {
    if (splitedStr[ind] !== splitedStr[splitedStr.length - 1 - ind]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome("0P"));
