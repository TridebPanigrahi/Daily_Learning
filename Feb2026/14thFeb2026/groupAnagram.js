function groupAnagram(arr) {
  const obj = {};
  let result = [];
  for (let ele of arr) {
    let sortEle = ele.split("").sort().join("");
    if (!obj[sortEle]) {
      obj[sortEle] = [ele];
    } else {
      obj[sortEle].push(ele);
    }
  }
  for (let [key, value] of Object.entries(obj)) {
    result.push(value);
  }
  return result;
}

console.log(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]));