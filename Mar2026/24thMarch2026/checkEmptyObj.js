function checkEmptyObj(obj) {
  let keys = Object.keys(obj);
  return keys.length === 0;
}

console.log(checkEmptyObj({}));
