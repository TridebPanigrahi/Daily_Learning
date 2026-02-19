const checkAnagram = (str1, str2)=>{
    if(!str1 || !str2) return false
    const map = new Map()
    if(str1.length === str2.length){
        for(let char of str1){
            map.set(char, (map.get(char) || 0) + 1)
        }
        for(let char of str2){
            if(map.has(char)){
                map.set(char, map.get(char) - 1)
            }
            else {
                return false
            }
            return true
        }
    }
    return false
}

console.log(checkAnagram("listen", "silent"))