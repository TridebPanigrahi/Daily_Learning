function capitalize(str) {
  const newStr = str.replace(/[^a-zA-Z\s]/g, "");
  const splitedStr = newStr.split(/\s+/);
  const mapedStr = splitedStr.map(
    (ele) => ele[0].toUpperCase() + ele.slice(1, ele.length),
  );
  return mapedStr.join(" ");
}

console.log(capitalize("hello world"));
