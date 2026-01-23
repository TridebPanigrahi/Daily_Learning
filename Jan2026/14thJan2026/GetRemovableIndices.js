//Correct approch Two pointers
//IN ("aaab", "aab")
// OP [0, 1, 2]
/*
function getRemovableIndices(str1, str2) {
  const result = [];

  if (str1.length !== str2.length + 1) return [-1];

  for (let i = 0; i < str1.length; i++) {
    let p1 = 0,
      p2 = 0;

    while (p1 < str1.length) {
      if (p1 === i) {
        console.log("p1===>", p1, "i========>", i);
        p1++;
        continue;
      }
      if (str1[p1] !== str2[p2]) break;
      p1++;
      p2++;
      console.log("p2")
    }

    if (p2 === str2.length) result.push(i);
  }

  return result.length ? result : [-1];
}

console.log(getRemovableIndices("aaab", "aab"));

*/

// My Appproch

/*

function getRemovableIndices(str1, str2) {
  const result = [];

  if (str1.length < str2.length) return [-1];

  for (let i = 0; i < str1.length; i++) {
    const candidate = str1.slice(0, i) + str1.slice(i + 1);

    if (candidate === str2) {
      result.push(i);
    }
  }

  return result.length ? result : [-1];
}

*/
