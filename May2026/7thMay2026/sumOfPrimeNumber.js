function sumOfPrimeNumber(num) {
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

function isPrime(i) {
  let count = 0;
  for (let j = i-1; j >= i / 2; j--) {
    if (i % j === 0) {
      count++;
    }
  }
  return count === 0;
}

console.log(sumOfPrimeNumber(5));
