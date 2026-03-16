function firstNonRepetingChar(str) {
  const map = new Map();
  for (const ele of str) {
    map.set(ele, (map.get(ele) || 0) + 1);
  }
  for (const ele of str) {
    if (map.get(ele) === 1) {
      return ele;
    }
  }
}

console.log(firstNonRepetingChar("aabbcdde"));
