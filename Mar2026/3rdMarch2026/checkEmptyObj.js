function checkEmptyObj(obj) {
  if (typeof obj === "object") {
    let keys = Object.keys(obj);
    return keys.length === 0;
  }
}

console.log(checkEmptyObj({}));
