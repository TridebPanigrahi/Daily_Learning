// Factorial
// Difficulty: BasicAccuracy: 40.58%Submissions: 254K+Points: 1
// Given a positive integer, n. Find the factorial of n.

// Examples :

// Input: n = 5
// Output: 120
// Explanation: 1 x 2 x 3 x 4 x 5 = 120
// Input: n = 4
// Output: 24
// Explanation: 1 x 2 x 3 x 4 = 24
// Constraints:
// 0 ≤ n ≤ 12

function factorial(num) {
  let result = 1;
  if (num === 0) return result;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5))
