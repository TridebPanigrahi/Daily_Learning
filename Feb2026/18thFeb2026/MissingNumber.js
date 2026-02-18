function findMissingNumber(arr){
    let count =1
    for(let ele of arr){
        if(ele === count ) count ++
        else return count
    }
}

console.log(findMissingNumber([1, 2, 4, 5]))