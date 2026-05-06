function countSqure(num) {
  let count = 0;
  let next = 1;
  let value = 1;
  while (value < num) {
    next++;
    value = next * next;
    count++;
  }
  return count;
}

console.log(countSqure(9));
