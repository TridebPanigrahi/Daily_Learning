function myMap(arr, fn){
    return arr.map(fn)
}

console.log(myMap([1, 2, 3], x => x * 2))