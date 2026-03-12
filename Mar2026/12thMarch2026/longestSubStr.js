function longestSubstring(str) {
  let map = new Set();
  let left = 0;
  let maxLength = 0;
  for (let right = 0; right < str.length; right++) {
    while(map.has(str[right])) {
      map.delete(str[left]);
      left++;
    }
    map.add(str[right]);
    if (right - left + 1 > maxLength) {
      maxLength = right - left + 1;
    }
  }
  console.log(map)
  return maxLength;
}

console.log(longestSubstring("abcbs"));
