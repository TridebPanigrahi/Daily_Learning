// Given two integers n and m (m != 0). The problem is to find the number closest to n and divisible by m. If there is more than one such number, then output the one having the maximum absolute value.

// Examples :

// Input: n = 13, m = 4
// Output: 12
// Explanation: 12 is the Closest Number to 13 which is divisible by 4.
// Input: n = -15, m = 6
// Output: -18
// Explanation: Both -12 and -18 are closest to -15 and divisible by 6, but -18 has the maximum absolute value. So, output is -18.

function closestNum(n, m) {
  let next = n + 1;
  let prev = n - 1;
  while (next % m !== 0 || prev % m !== 0) {
    next++;
    prev--;
  }
  let nextDiff = next - n;
  let prevDiff = n - prev;
  if (nextDiff > prevDiff) {
    return prev;
  } else {
    return next;
  }
}

console.log(closestNum(13, 4));
