function anagram(str1, str2) {
  let obj = {};
  if (str1.length === str2.length) {
    for (const ele of str1) {
      obj[ele] = (obj[ele] || 0) + 1;
    }
    for (const ele of str2) {
      if (obj[ele]) {
        obj[ele]--;
      } else {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

console.log(anagram("madam", "aadmn"));
