function longestSubarr(arr, target){
    let currentArr = []
    let maxArr = []
    let sum = 0
    for(let ele of arr){
        
        sum=sum+ele
        if(sum <= target){
            currentArr.push(ele)
            maxArr.push(ele)
        }
        else{

        }
    }
}

// [1,2,3,1,1,2,4,5], 6