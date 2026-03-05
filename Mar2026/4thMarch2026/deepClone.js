function deepClone(obj) {
  if (!obj || typeof obj !== "object") {
    return obj;
  }
  const copy = Array.isArray(obj) ? [] : {};
  for (let key of obj) {
    copy[key] = deepClone(key);
  }
  return copy;
}

console.log(
  deepClone({
    1: 1,
    2: 2,
    3: {
      4: {
        5: 6,
        7: 9,
        9: 12,
        10: { 1: { 2: { 3: { 4: { 5: { 6: { 7: { 8: [{ 4: 6 }] } } } } } } } },
      },
    },
  }),
);
