function reverseWord(sentanse) {
  let result = "";
  let splitedSen = sentanse.split(/\s+/);
  for (let word of splitedSen) {
    result = word + " " + result;
  }
  return result
}

console.log(reverseWord("JavaScript is osm"))