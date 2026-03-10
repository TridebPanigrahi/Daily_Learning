function sumDigit(num){
    let result = 0
    while(num>0){
        let digit = num%10
        result = result + digit
        num = Math.floor(num / 10)
    }
    return result
}

console.log(sumDigit(1234))