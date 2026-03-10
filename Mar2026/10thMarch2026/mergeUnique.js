function mergeUnique (arr1, arr2){
    const newArr = [...new Set([...arr1, ...arr2])]
    return newArr
}

console.log(mergeUnique([1,2,3],[2,3,4]))