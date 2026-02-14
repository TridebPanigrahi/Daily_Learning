function firstNonRepeatingChar(str) {
  if (!str) return null;
  let obj = {};
  for (let char of str) {
    obj[char] = (obj[char] || 0) + 1;
  }
  for (let char of str) {
    if (obj[char] === 1) return char;
  }
  return null
}

// console.log(firstNonRepeatingChar("helkhlo"))