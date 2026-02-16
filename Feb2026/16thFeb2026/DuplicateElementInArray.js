function findDuplicate(input){
    const obj ={}
    const result = []
    for(let char of input){
        obj[char] = (obj[char] || 0) + 1
        if(obj[char] == 2){
            result.push(char)
        }
    }
    return result

}

console.log(findDuplicate([1, 2, 3, 4, 2, 5, 3]))