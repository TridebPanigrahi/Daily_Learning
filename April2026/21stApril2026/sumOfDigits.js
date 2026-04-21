const sumOfDigits = (number) => {
  let result = 0;
  while (number > 0) {
    let digit = number % 10;
    result += digit;
    number = Math.floor(number / 10);
  }
  return result;
};

console.log(sumOfDigits(1234));
