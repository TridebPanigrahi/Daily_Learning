function secondLargest(arr){
    let largest = -Infinity
    let secondL = -Infinity
    for(let ele of arr){
        if(ele >largest){
            secondL = largest
            largest = ele
        }else if(ele > secondL && ele < largest){
            secondL = ele
        }
    }
    return secondL
}

console.log(secondLargest([10, 5, 20, 8]))