function longestWord(sen){
    let newSen = sen.replace(/[^a-zA-Z\s]/g, "")
    const splitedSen = newSen.split(/\s+/)
    let maxLength = 0
    let result = ""
    for(let ele of splitedSen){
        if(ele.length > maxLength){
            maxLength = ele.length
            result = ele
        }
    }
    return result
}

console.log(longestWord("I love learning javascript"));