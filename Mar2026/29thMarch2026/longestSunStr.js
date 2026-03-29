function longestSubStr(str) {
  let store = new Set();
  let left = 0;
  let maxLength = 1;
  for (let right = 0; right < str.length; right++) {
    while (store.has(str[right])) {
      store.delete(str[left]);
      left++;
    }
    store.add(str[right]);
    if (right - left + 1 > maxLength) {
      maxLength = right - left + 1;
    }
  }
  return maxLength;
}

console.log(longestSubStr("abcadefabsjds"));
