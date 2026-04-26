function longestArr(arr, k){
    let map = new Map()
    let start = -1
    let end = -1
    let sum =0
    let maxLength =0
    for(let i=0;i<arr.length;i++){
        sum = sum + arr[i]
        if(sum === k){
            start = 0
            end = i
            maxLength = i + 1
        }
        if(map.has(sum)){
            
        }
    }
}