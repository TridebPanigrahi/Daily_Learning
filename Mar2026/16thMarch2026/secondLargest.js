function secondLargest(arr){
    let firstLr = -Infinity
    let secondLr = - Infinity

    for(const ele of arr){
        if(ele > firstLr){
            secondLr = firstLr
            firstLr = ele
        }
        else if(ele > secondLr && ele < firstLr){
            secondLr = ele
        }
    }
    return secondLr === -Infinity ? null : secondLr
}

console.log("Second Largest", secondLargest([10, 5, 8, 20, 15]))