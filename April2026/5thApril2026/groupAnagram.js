function groupAnagram(arr) {
  let obj = {};
  for (let ele of arr) {
    let newSortedEle = ele.split("").sort().join();
    if (!obj[newSortedEle]) {
      obj[newSortedEle] = [];
    }
    obj[newSortedEle].push(ele);
  }
  return Object.values(obj);
}

console.log(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]));
