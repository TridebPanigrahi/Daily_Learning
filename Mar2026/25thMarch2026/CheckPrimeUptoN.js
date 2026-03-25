function checkPrimeUptoN(Num, n) {
  let num = 0;
  let count = 0;
  let nextNumber = Num + 1;

  while (num <= count) {
    if (isPrime(nextNumber)) {
      count++;
      if (n === count) {
        return nextNumber;
      }
    }
    nextNumber++;
  }
}

function isPrime(x) {
  if (x == 2) return true;
  for (let i = 2; i < Math.sqrt(x); i++) {
    if (x % i === 0) return false;
  }
  return true;
}

console.log(checkPrimeUptoN(10, 5));
