function isUniqueArray(arr){
    if(!arr || !arr.length) return null
    if(arr.length === 1) return true
    let obj = {}
    for(let ele of arr){
        obj[ele] = (obj[ele] || 0) + 1
        if(obj[ele] > 1) return false
    }
    return true
}

console.log(isUniqueArray([1,2]))