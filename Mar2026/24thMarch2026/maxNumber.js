function maxNumber(arr){
    let result = -Infinity
    for(const ele of arr){
        if(ele>result){
            result = ele
        }
    }
    return result
}

console.log(maxNumber([10,20,30,40,12]))