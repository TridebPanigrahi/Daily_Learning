function anagramCheck(word1, word2) {
  const cleanWord1 = word1.replace(/[^a-zA-Z/s+/]/g, "");
  const cleanWord2 = word2.replace(/[^a-zA-Z/s+/]/g, "");
  if (cleanWord1.length !== cleanWord2.length) return false;
  for (let i = 0; i < cleanWord1.length; i++) {
    if (
      !cleanWord2.includes(cleanWord1[i]) ||
      !cleanWord1.includes(cleanWord2[i])
    )
      return false;
  }
  return true;
}
