function longestSubStr(sen) {
  let setData = new Set();
  let left = 0;
  let maxLen = 0;
  for (let right = 0; right < sen.length; right++) {
    while (setData.has(sen[right])) {
      setData.delete(sen[left]);
      left++;
    }
    setData.add(sen[right]);
    if (maxLen < right - left + 1) {
      maxLen = right - left + 1;
    }
  }
  return maxLen;
}

console.log(longestSubStr("abb"));
