// Search in a Matrix
// Difficulty: EasyAccuracy: 52.38%Submissions: 16K+Points: 2
// Given a 2D integer array mat[][] of n rows and m columns and a number x, find whether element x is present in the matrix or not.

// Examples:

// Input: mat[][] = [[6, 23, 21], [4, 45, 32], [69, 11, 87]], x = 32
// Output: true
// Explanation: 32 is present in the matrix.
// Input: mat[][] = [[14, 34, 23, 95, 43, 28]], x = 55
// Output: false
// Explanation: 55 is not present in the matrix.
// Input: mat[][] = [[87, 9, 99], [101, 3, 111]], x = 101
// Output: true
// Explanation: 101 is present in the matrix.
// Constraints:
// 1 ≤ n, m ≤ 500
// 1 ≤ mat[][] ≤ 105
// 1 ≤ x ≤ 105

function searchMatrix(arr, x) {
  let set = new Set();
  for (let ele of arr) {
    ele.forEach((element) => {
      set.add(element);
    });
  }
  return set.has(x);
}

console.log(
  searchMatrix(
    [
      [6, 23, 21],
      [4, 45, 32],
      [69, 11, 87],
    ],
    32,
  ),
);
