function myFilter(arr, callback){
    return arr.filter(callback)
}

console.log(myFilter([1, 2, 3, 4], x => x > 2))