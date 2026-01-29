// function longestSubStr(str) {
//   let set = new Set();
//   let left = 0;
//   let maxLen = 0;

//   for (let right = 0; right < str.length; right++) {
//     while (set.has(str[right])) {
//       set.delete(str[left]);
//       left++;
//     }
//     set.add(str[right]);
//     maxLen = Math.max(maxLen, right - left + 1);
//   }

//   return maxLen;
// }

// console.log(longestSubStr("abb")); // 2
// console.log(longestSubStr("abcabcbb")); // 3
// console.log(longestSubStr("dvdf"));     // 3


function longestSubStr(str) {
  let set = new Set();
  let left = 0;

  let maxLen = 0;
  let startIndex = 0;

  for (let right = 0; right < str.length; right++) {
    while (set.has(str[right])) {
      set.delete(str[left]);
      left++;
    }

    set.add(str[right]);

    if (right - left + 1 > maxLen) {
      maxLen = right - left + 1;
      startIndex = left;
    }
  }

  return str.slice(startIndex, startIndex + maxLen);
}
console.log(longestSubStr("abb")); 
