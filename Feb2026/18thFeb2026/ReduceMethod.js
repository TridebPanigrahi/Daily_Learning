function myReduce(arr, fn){
    return arr.reduce(fn)
}
console.log(myReduce([1, 2, 3, 4], (acc, curr) => acc + curr, 0))