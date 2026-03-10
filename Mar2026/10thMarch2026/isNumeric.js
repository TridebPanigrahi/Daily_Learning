function isNumeric(str){
    let differOne = str - 1
    return Number(str-1) == differOne
}

console.log(isNumeric("12345"))