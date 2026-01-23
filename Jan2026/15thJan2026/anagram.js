// My approch

function anagram(str1, str2) {
  if (str1.length === str2.length) {
    let result = str2;
    for (let ele of str1) {
      if (str2.indexOf(ele) != -1) {
        result = result.replace(ele, "");
      } else {
        return false;
      }
    }
    if (result === "") return true;
  } else {
    return false;
  }
}

console.log(anagram("listen", "silent"));

// Chart Gpt approch 

function anagram(str1, str2) {
  const clean1 = str1.toLowerCase().replace(/[^a-z]/g, "");
  const clean2 = str2.toLowerCase().replace(/[^a-z]/g, "");

  if (clean1.length !== clean2.length) return false;

  const freq = {};

  for (let ch of clean1) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  for (let ch of clean2) {
    if (!freq[ch]) return false;
    freq[ch]--;
  }

  return true;
}

