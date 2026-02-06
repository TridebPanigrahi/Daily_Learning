/*
function RotetionString(str1, str2) {
  if (str1.length !== str2.length) return false;
  let result = str1;
  for (let i = 0; i < str1.length; i++) {
    let newSlicedRes = result.slice(1, str1.length);
    result = newSlicedRes + str1[i];
    if (result === str2) {
      return true;
    }
  }
  return false;
}

console.log(RotetionString("abcs", "sabc"));

*/

//On solution

function rotationStr(str1, str2) {
  if (str1.length !== str2.length) return false;
  return (str1 + str1).includes(str2);
}
