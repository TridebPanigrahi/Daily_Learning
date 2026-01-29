function nonRepetingChar(sen) {
  if (!sen) return "";
  let obj = {};
  for (let char of sen) {
    obj[char] = (obj[char] || 0) + 1;
  }

  for (let [key, value] of Object.entries(obj)) {
    if (value === 1) return key;
  }
}

console.log(nonRepetingChar("aabbccsdhhdk"));
