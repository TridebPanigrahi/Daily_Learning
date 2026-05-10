// Sum Of Digits
// Difficulty: EasyAccuracy: 67.08%Submissions: 82K+Points: 2
// Given a positive number n. Find the sum of all the digits of n.

// Examples:

// Input: n = 687
// Output: 21
// Explanation: Sum of 687's digits: 6 + 8 + 7 = 21
// Input: n = 12
// Output 3
// Explanation: Sum of 12's digits: 1 + 2 = 3
// Constraints:
// 1 <= n <= 105

function sumOfDigit(num){
    let result = 0
    while(num!=0){
        const digits = num %10
        result = result + digits
        num= Math.floor(num/10)
    }
    return result
}

console.log(sumOfDigit(1234))