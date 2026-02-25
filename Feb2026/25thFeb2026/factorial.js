function factorial(num) {
  if (num === 0) return 1;
  let result = 1;
  while (num !== 1) {
    result = result * num;
    num--;
  }
  return result;
}

console.log(factorial(1));
