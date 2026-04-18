function validateEmptyPara(obj){
    const result = Object.keys(obj)
    return result.length === 0
}

console.log(validateEmptyPara({1:2}))