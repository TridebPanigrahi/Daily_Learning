function missingNumber(arr){
    const sortedArr = arr.sort((a,b)=>a-b)
    for(let index=0;index<sortedArr.length;index++){
        if(index !== sortedArr[index]) return index
    }
}

console.log(missingNumber([3,0,1]))