function longestSubstr(str) {
  let result = "";
  let left = 0;
  let maxLength = 1;
  let obj = new Set();
  for (let right = 0; right < str.length; right++) {
    while (obj.has(str[right])) {
      obj.delete(str[left]);
      left++;
    }
    obj.add(str[right]);
    if (right - left + 1 > maxLength) {
      maxLength = right - left + 1;
      result = str.slice(left, right + 1);
    }
  }
  return result;
}

console.log(longestSubstr("abcabde"));
