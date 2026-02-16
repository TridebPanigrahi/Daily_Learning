function anagram(arr) {
  const map = new Map();
  for (ele of arr) {
    const key = ele.split("").sort().join("");
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(ele);
  }
  return Array.from(map.values());
  console.log(map.values());
}
console.log(anagram(["eat", "tea", "tan", "ate", "nat", "bat"]));
