function frequencyCount(str) {
  let freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}

// console.log(frequencyCount("hello"));

//Using map
function frequencyByusingMap(str) {
  const map = new Map();
  for (let char of str) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  return map
}

console.log(frequencyByusingMap("hello"))