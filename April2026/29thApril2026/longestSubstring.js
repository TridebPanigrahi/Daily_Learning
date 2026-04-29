function longestSubstring(str) {
  let set = new Set();
  let result = "";
  let maxLength = 1;
  let left = 0;
  for (let right = 0; right < str.length; right++) {
    while (set.has(str[right])) {
      set.delete(str[left]);
      left++;
    }
    set.add(str[right]);
    if (right - left + 1 > maxLength) {
      maxLength = right - left + 1;
      result = str.slice(left, right + 1);
    }
  }
  return result
}


console.log(longestSubstring("abcadiwbeois"))
