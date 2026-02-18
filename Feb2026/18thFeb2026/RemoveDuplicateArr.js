function removeDuplicate(arr){
    return [...new Set(arr)]
}

console.log(removeDuplicate([2,4,3,2,24,4]))