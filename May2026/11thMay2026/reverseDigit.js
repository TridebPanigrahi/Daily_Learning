// Reverse digits
// Difficulty: BasicAccuracy: 46.92%Submissions: 140K+Points: 1
// You are given an integer n. Your task is to reverse the digits, ensuring that the reversed number has no leading zeroes.

// Examples:

// Input: n = 122
// Output: 221
// Explanation: By reversing the digits of number, number will change into 221.
// Input : n = 200
// Output: 2
// Explanation: By reversing the digits of number, number will change into 2.
// Input : n = 12345
// Output: 54321
// Explanation: By reversing the digits of number, number will change into 54321.
// Constraints:
// 1 <= n <= 106

function reverseDigit(num) {
  let result = 1;
  while (num > 0) {
    const digit = num % 10;
    result = result * 10 + digit;
    num = Math.floor(num / 10);
  }
  return result;
}

console.log(reverseDigit(112));
