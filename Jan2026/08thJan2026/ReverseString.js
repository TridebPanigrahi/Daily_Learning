/*
// 1st method
function reverseString(str){
    let result = ""
    for(let i=str.length-1;i>=0;i--){
        result+=str[i]
    }
    return result
}

console.log(reverseString("hello"))
*/

//2nd method

function reverseStr(str){
    let result =""
    for(let char of str){
        result = char + result
    }
    return result
}

console.log(reverseStr("Hello"))
