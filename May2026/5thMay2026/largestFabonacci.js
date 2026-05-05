// Given an array arr with positive integers, the task is to find the largest subsequence from the array which contains only Fibonacci numbers.

// Examples:

// Input: arr[] = [1, 4, 3, 9, 10, 13, 7]
// Output: [1, 3, 13]
// Explanation: The output three numbers are Fibonacci numbers.
// Input: arr[] = [0, 2, 8, 5, 2, 1, 4, 13, 23]
// Output: [0, 2, 8, 5, 2, 1, 13]
// Explanation: The output seven numbers are Fibonacci numbers.
// Constraints:
// 1<= arr.size() <=105
// 1<= arr[i] <=105

function largestFabonacciSequence(arr){
    let fabonacciObj = new Set([0,1,1])
    const result = []
    const maxNum = Math.max(...arr)
    let firstNum = 0
    let secondNum = 1
    let thirdNum = 1
    while(thirdNum <= maxNum){
        firstNum = secondNum
        secondNum = thirdNum
        thirdNum = firstNum + secondNum
        fabonacciObj.add(thirdNum)
    }
    for(let ele of arr){
        if(fabonacciObj.has(ele)){
            result.push(ele)
        }
    }
    return result
}

console.log(largestFabonacciSequence([1, 4, 3, 9, 10, 13, 7]))